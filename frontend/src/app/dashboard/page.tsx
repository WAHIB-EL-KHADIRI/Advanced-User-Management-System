'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    { label: 'Utilisateurs', value: '1,234', icon: '👥', color: 'from-blue-500 to-blue-600', bgGradient: 'from-blue-500/20 to-blue-600/20' },
    { label: 'Administrateurs', value: '45', icon: '🔐', color: 'from-purple-500 to-purple-600', bgGradient: 'from-purple-500/20 to-purple-600/20' },
    { label: 'Rôles', value: '12', icon: '📋', color: 'from-pink-500 to-pink-600', bgGradient: 'from-pink-500/20 to-pink-600/20' },
    { label: 'Sessions Actives', value: '89', icon: '🟢', color: 'from-green-500 to-green-600', bgGradient: 'from-green-500/20 to-green-600/20' },
  ];

  const recentUsers = [
    { id: 1, name: 'Jean Dupont', email: 'jean@example.com', role: 'Administrateur', status: 'Actif' },
    { id: 2, name: 'Marie Martin', email: 'marie@example.com', role: 'Utilisateur', status: 'Actif' },
    { id: 3, name: 'Pierre Laurent', email: 'pierre@example.com', role: 'Éditeur', status: 'Inactif' },
    { id: 4, name: 'Sophie Bernard', email: 'sophie@example.com', role: 'Utilisateur', status: 'Actif' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <motion.div 
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h1 className="text-4xl font-bold gradient-text mb-2">
            Tableau de Bord 📊
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Bienvenue, gérez votre système et tous ses composants
          </p>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -8 }}
            className="relative group"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${stat.bgGradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            <div className="relative card hover-lift overflow-hidden">
              {/* Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <motion.div 
                  className="text-5xl mb-4"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                >
                  {stat.icon}
                </motion.div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold mb-2">
                  {stat.label}
                </p>
                <p className={`text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </p>
              </div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Search & Actions */}
      <motion.div 
        className="card space-y-6 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="🔍 Rechercher un utilisateur..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input w-full"
              />
            </div>
            <motion.button 
              className="btn btn-primary whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🔎 Rechercher
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Recent Users Table */}
      <motion.div 
        className="card relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold gradient-text mb-6">
            Utilisateurs Récents
          </h2>
          
          <div className="overflow-x-auto rounded-2xl">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-800">
                  <th className="px-6 py-4 text-left font-bold text-gray-700 dark:text-gray-300">Nom</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-700 dark:text-gray-300">Email</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-700 dark:text-gray-300">Rôle</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-700 dark:text-gray-300">Statut</th>
                  <th className="px-6 py-4 text-center font-bold text-gray-700 dark:text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentUsers.map((user, idx) => (
                  <motion.tr 
                    key={user.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="border-b border-gray-100 dark:border-gray-700 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300 group"
                  >
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                      {user.email}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 dark:from-blue-900 dark:to-purple-900 dark:text-blue-200 shadow-sm">
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-2 text-sm font-semibold ${
                        user.status === 'Actif' 
                          ? 'text-green-600 dark:text-green-400' 
                          : 'text-gray-600 dark:text-gray-400'
                      }`}>
                        <motion.span 
                          className={`w-3 h-3 rounded-full ${
                            user.status === 'Actif' ? 'bg-green-500' : 'bg-gray-500'
                          }`}
                          animate={user.status === 'Actif' ? {
                            scale: [1, 1.2, 1],
                            opacity: [1, 0.7, 1]
                          } : {}}
                          transition={{ duration: 2, repeat: Infinity }}
                        ></motion.span>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center space-x-2">
                      <motion.button 
                        className="px-4 py-2 text-sm rounded-xl bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 hover:from-blue-200 hover:to-blue-300 transition-all duration-300 dark:from-blue-900 dark:to-blue-800 dark:text-blue-200 shadow-sm"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        ✏️
                      </motion.button>
                      <motion.button 
                        className="px-4 py-2 text-sm rounded-xl bg-gradient-to-r from-red-100 to-red-200 text-red-700 hover:from-red-200 hover:to-red-300 transition-all duration-300 dark:from-red-900 dark:to-red-800 dark:text-red-200 shadow-sm"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        🗑️
                      </motion.button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Affichage 1 à 4 sur 1,234 utilisateurs
            </p>
            <motion.button 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Voir tous les utilisateurs →
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.div 
          className="card relative overflow-hidden group"
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-bold gradient-text mb-6">
              🎯 Actions Rapides
            </h3>
            <div className="space-y-3">
              {[
                { icon: '➕', text: 'Ajouter un nouvel utilisateur' },
                { icon: '📋', text: 'Gérer les rôles et permissions' },
                { icon: '📊', text: 'Voir les rapports' }
              ].map((action, idx) => (
                <motion.button 
                  key={idx}
                  className="w-full btn btn-secondary text-left group/btn relative overflow-hidden"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span className="text-xl">{action.icon}</span>
                    <span>{action.text}</span>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="card relative overflow-hidden group"
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute top-0 left-0 w-40 h-40 bg-pink-500/10 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-bold gradient-text mb-6">
              🔔 Notifications Récentes
            </h3>
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100/50 dark:from-blue-900/30 dark:to-blue-800/30 border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <p className="font-bold text-blue-900 dark:text-blue-200 mb-1">
                  Nouvel Utilisateur
                </p>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Un nouvel utilisateur s'est inscrit il y a une heure
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="p-4 rounded-xl bg-gradient-to-r from-green-50 to-green-100/50 dark:from-green-900/30 dark:to-green-800/30 border-l-4 border-green-500 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <p className="font-bold text-green-900 dark:text-green-200 mb-1">
                  Mise à Jour Système
                </p>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Le système a été mis à jour avec succès
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
