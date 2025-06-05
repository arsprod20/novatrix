import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'

export async function POST(request: Request) {
  let email: string
  let password: string

  try {
    const body = await request.json()
    if (
      typeof body !== 'object' ||
      body === null ||
      typeof (body as { email?: unknown }).email !== 'string' ||
      typeof (body as { password?: unknown }).password !== 'string'
    ) {
      throw new Error('Données manquantes ou invalides')
    }

    email = (body as { email: string }).email
    password = (body as { password: string }).password
  } catch (error) {
    console.error('Erreur dans la lecture du JSON ou données manquantes :', error)
    return NextResponse.json(
      { error: 'Requête invalide' },
      { status: 400 }
    )
  }

  let isValid = false
  try {
    const hashedPassword = process.env.ADMIN_PASSWORD
    if (!hashedPassword) {
      console.error('ADMIN_PASSWORD non défini dans les variables d’environnement')
      return NextResponse.json(
        { error: 'Erreur d’authentification' },
        { status: 500 }
      )
    }
    isValid = await bcrypt.compare(password, hashedPassword)
  } catch (error) {
    console.error('Erreur de comparaison bcrypt :', error)
    return NextResponse.json(
      { error: 'Erreur d\'authentification' },
      { status: 500 }
    )
  }

  const adminEmail = process.env.ADMIN_EMAIL
  if (!adminEmail) {
    console.error('ADMIN_EMAIL non défini dans les variables d’environnement')
    return NextResponse.json(
      { error: 'Erreur d\'authentification' },
      { status: 500 }
    )
  }

  if (email !== adminEmail || !isValid) {
    console.warn(`Tentative de connexion échouée pour l’email : ${email}`)
    return NextResponse.json(
      { error: 'Identifiants invalides' },
      { status: 401 }
    )
  }

  const response = NextResponse.json({ success: true })
  response.cookies.set({
    name: 'portfolio-session',
    value: 'authenticated',      
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7,      
    path: '/',
    sameSite: 'strict'           
  })

  return response
}
