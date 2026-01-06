'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function UsersPage() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Jean Dupont', email: 'jean@example.com', role: 'Administrateur', status: 'Actif', date: '2024-01-05' },
    { id: 2, name: 'Marie Martin', email: 'marie@example.com', role: 'Utilisateur', status: 'Actif', date: '2024-01-04' },
    { id: 3, name: 'Pierre Laurent', email: 'pierre@example.com', role: 'Éditeur', status: 'Inactif', date: '2024-01-03' },
  ]);

  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'Utilisateur' });

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (newUser.name && newUser.email) {
      setUsers([...users, {
        id: users.length + 1,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        status: 'Actif',
        date: new Date().toISOString().split('T')[0],
      }]);
      setNewUser({ name: '', email: '', role: 'Utilisateur' });
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold gradient-text mb-2">Gestion des Utilisateurs 👥</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">Ajoutez et gérez tous les utilisateurs du système</p>
      </motion.div>

      {/* Add New User Form */}
      <motion.div 
        className="card relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold gradient-text mb-6">
            ➕ Ajouter un nouvel utilisateur
          </h2>
          
          <form onSubmit={handleAddUser} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                  Nom Complet
                </label>
                <input
                  type="text"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  placeholder="Entrez le nom complet"
                  className="input"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                  Adresse Email
                </label>
                <input
                  type="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  placeholder="example@domain.com"
                  className="input"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                  Rôle
                </label>
                <select
                  value={newUser.role}
                  onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                  className="input"
                >
                  <option>Utilisateur</option>
                  <option>Éditeur</option>
                  <option>Administrateur</option>
                </select>
              </div>
            </div>

            <motion.button 
              type="submit" 
              className="btn btn-primary w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ✨ Ajouter l'Utilisateur
            </motion.button>
          </form>
        </div>
      </motion.div>

      {/* Users Table */}
      <motion.div 
        className="card relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold gradient-text mb-6">
            📋 Liste des Utilisateurs ({users.length})
          </h2>

          <div className="overflow-x-auto rounded-2xl">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-800">
                  <th className="px-6 py-4 text-left font-bold text-gray-700 dark:text-gray-300">#</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-700 dark:text-gray-300">Nom</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-700 dark:text-gray-300">Email</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-700 dark:text-gray-300">Rôle</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-700 dark:text-gray-300">Statut</th>
                  <th className="px-6 py-4 text-center font-bold text-gray-700 dark:text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence>
                  {users.map((user, idx) => (
                    <motion.tr 
                      key={user.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="border-b border-gray-100 dark:border-gray-700 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300 group"
                    >
                      <td className="px-6 py-4 text-gray-900 dark:text-white font-semibold">{user.id}</td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">{user.name}</td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{user.email}</td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 dark:from-purple-900 dark:to-pink-900 dark:text-purple-200 shadow-sm">
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
                          onClick={() => setUsers(users.filter(u => u.id !== user.id))}
                          className="px-4 py-2 text-sm rounded-xl bg-gradient-to-r from-red-100 to-red-200 text-red-700 hover:from-red-200 hover:to-red-300 transition-all duration-300 dark:from-red-900 dark:to-red-800 dark:text-red-200 shadow-sm"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          🗑️
                        </motion.button>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
