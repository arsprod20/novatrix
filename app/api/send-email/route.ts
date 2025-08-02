// app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, phone, company, service, message, contactType } = await request.json();

  // Configuration du transporteur SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    // Envoi de l'email
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_FROM,
      subject: `Nouveau ${getContactSubject(contactType)} de ${name}`,
      html: `
        <h1>Nouvelle demande de contact</h1>
        <p><strong>Type:</strong> ${getContactTypeLabel(contactType)}</p>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone || 'Non fourni'}</p>
        <p><strong>Entreprise:</strong> ${company || 'Non fourni'}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    );
  }
}

function getContactSubject(type: string): string {
  switch (type) {
    case 'support': return 'Support Client';
    case 'commercial': return 'Demande Commerciale';
    case 'partnership': return 'Partenariat';
    default: return 'Contact';
  }
}

function getContactTypeLabel(type: string): string {
  switch (type) {
    case 'support': return 'Support Client';
    case 'commercial': return 'Demande Commerciale';
    case 'partnership': return 'Partenariat';
    default: return 'Contact Général';
  }
}