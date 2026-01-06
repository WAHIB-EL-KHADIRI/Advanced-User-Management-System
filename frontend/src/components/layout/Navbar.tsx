'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 shadow-2xl backdrop-blur-xl">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-pink-600/90 backdrop-blur-xl"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-10">
            <motion.div 
              className="text-3xl transform group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              👥
            </motion.div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white tracking-wider drop-shadow-lg">
                Gestion des Utilisateurs
              </h1>
              <p className="text-xs text-blue-100/90 font-medium">Système avancé et sécurisé</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 relative z-10">
            <Link 
              href="/" 
              className="relative px-4 py-2 text-white hover:text-blue-100 transition-all duration-300 font-medium text-sm uppercase tracking-wide group"
            >
              <span className="relative z-10">Accueil</span>
              <span className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
            </Link>
            <Link 
              href="/dashboard" 
              className="relative px-4 py-2 text-white hover:text-blue-100 transition-all duration-300 font-medium text-sm uppercase tracking-wide group"
            >
              <span className="relative z-10">Tableau de Bord</span>
              <span className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 relative z-10">
            <Link 
              href="/login" 
              className="relative px-6 py-2.5 text-white hover:text-blue-50 rounded-xl transition-all duration-300 font-semibold text-sm overflow-hidden group"
            >
              <span className="relative z-10">Connexion</span>
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            </Link>
            <Link 
              href="/register" 
              className="relative px-6 py-2.5 bg-white text-purple-600 hover:bg-blue-50 rounded-xl transition-all duration-300 font-bold text-sm shadow-lg hover:shadow-2xl transform hover:scale-105 overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-lg">✨</span>
                <span>S'inscrire</span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Animated Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
    </nav>
  );
}
