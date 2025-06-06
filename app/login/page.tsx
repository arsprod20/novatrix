'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Lock, Mail } from 'lucide-react';
import { useState } from 'react';

const formSchema = z.object({
  email: z.string().email('Invalid email.'),
  password: z.string().min(8, 'Minimum 8 characters.')
});

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        window.location.href = '/dashboard'; 
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Login failed.');
      }
    } catch {
      setError('Server connection error.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-background/80 backdrop-blur-lg border border-foreground/10 rounded-xl p-8 shadow-[0_0_30px_#00eaff20]"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#00eaff] to-[#00b4d8]">
            Login
          </h1>
          <p className="text-foreground/80">Access your personal space</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-500/10 text-red-500 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground/80 mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/50" />
              <input
                {...register('email')}
                type="email"
                disabled={loading}
                className="w-full pl-10 pr-4 py-3 bg-background border border-foreground/10 rounded-lg focus:border-[#00eaff] focus:ring-2 focus:ring-[#00eaff]/20 disabled:opacity-50"
                placeholder="email@example.com"
              />
            </div>
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground/80 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/50" />
              <input
                {...register('password')}
                type="password"
                disabled={loading}
                className="w-full pl-10 pr-4 py-3 bg-background border border-foreground/10 rounded-lg focus:border-[#00eaff] focus:ring-2 focus:ring-[#00eaff]/20 disabled:opacity-50"
                placeholder="••••••••"
              />
            </div>
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#00eaff] to-[#00b4d8] text-background font-medium py-3 rounded-lg transition-all shadow-[0_0_15px_#00eaff50] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Logging in...' : 'Log in'}
          </motion.button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-foreground/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-background text-foreground/80">
                Restricted access
              </span>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
}