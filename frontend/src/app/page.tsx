'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-blue-950 dark:to-purple-950 overflow-hidden relative">
      {/* Animated Gradient Orbs */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -50, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      <motion.div 
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 30, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.4, 1],
          x: [0, 40, 0],
          y: [0, -40, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      ></motion.div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center space-y-12">
          
          {/* Hero Icon */}
          <motion.div 
            className="flex justify-center"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="text-9xl drop-shadow-2xl relative">
              <motion.span
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🚀
              </motion.span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="block text-gray-900 dark:text-white mb-3">Système de Gestion</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-6xl sm:text-7xl lg:text-8xl">des Utilisateurs</span>
              </motion.h1>
              <motion.p 
                className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 font-bold max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Avancé • Sécurisé • Fiable
              </motion.p>
            </div>

            <motion.p 
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Un système complet et sécurisé pour l'authentification, la gestion des autorisations et des utilisateurs avec des outils d'analyse puissants et des rapports détaillés
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a
              href="/login"
              className="btn btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              🚀 Se Connecter
            </motion.a>
            <motion.a
              href="/register"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              ✨ Créer un Compte
            </motion.a>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            className="pt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[
              {
                icon: '🔐',
                title: 'Sécurité Avancée',
                description: 'Authentification multi-couches avec authentification à deux facteurs 2FA',
                color: 'from-blue-500 to-cyan-500',
                bgGradient: 'from-blue-500/20 to-cyan-500/20'
              },
              {
                icon: '👥',
                title: 'Gestion Avancée',
                description: 'Système de permissions RBAC puissant et personnalisable',
                color: 'from-purple-500 to-pink-500',
                bgGradient: 'from-purple-500/20 to-pink-500/20'
              },
              {
                icon: '📊',
                title: 'Analyses Complètes',
                description: 'Rapports et statistiques détaillés en temps réel',
                color: 'from-pink-500 to-red-500',
                bgGradient: 'from-pink-500/20 to-red-500/20'
              },
            ].map((feature, idx) => (
              <motion.div 
                key={idx} 
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + idx * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.bgGradient} opacity-0 group-hover:opacity-100 rounded-3xl blur-2xl transition-all duration-500`}></div>
                <div className="relative card border-2 border-white/50 dark:border-purple-600/30 hover:border-purple-500 transition-all duration-300 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <motion.div 
                    className="text-7xl mb-6 relative z-10"
                    whileHover={{ scale: 1.3, rotate: -12 }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold gradient-text mb-3 relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed font-medium relative z-10">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="pt-24 grid grid-cols-1 sm:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            {[
              { number: '100%', label: 'Sécurité', icon: '🔒', color: 'from-blue-600 to-cyan-600', bgColor: 'from-blue-50 to-cyan-50' },
              { number: '24/7', label: 'Support', icon: '🎯', color: 'from-purple-600 to-pink-600', bgColor: 'from-purple-50 to-pink-50' },
              { number: '99.9%', label: 'Disponibilité', icon: '✅', color: 'from-green-600 to-emerald-600', bgColor: 'from-green-50 to-emerald-50' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="group p-8 rounded-3xl bg-gradient-to-br from-white to-blue-50 dark:from-slate-900 dark:to-purple-900 backdrop-blur-xl border-2 border-white/50 dark:border-purple-600/30 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 2 + idx * 0.2 }}
                whileHover={{ scale: 1.1, y: -10 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <motion.div 
                  className="text-6xl mb-4 relative z-10"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    delay: idx * 0.5
                  }}
                >
                  {stat.icon}
                </motion.div>
                <div className={`text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 relative z-10`}>
                  {stat.number}
                </div>
                <p className="text-xl text-gray-700 dark:text-gray-300 font-bold relative z-10">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
}
