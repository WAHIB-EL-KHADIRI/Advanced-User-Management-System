'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    firstName: 'Jean',
    lastName: 'Dupont',
    email: 'jean@example.com',
    phone: '+33612345678',
    bio: 'Gestionnaire du système',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold gradient-text mb-2">Profil 👤</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">Gérez vos informations de compte personnel</p>
      </motion.div>

      {/* Profile Card */}
      <motion.div 
        className="card relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 pb-6 border-b border-gray-200 dark:border-gray-700">
            <motion.div 
              className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center text-6xl shadow-2xl relative overflow-hidden"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
              <span className="relative z-10">👤</span>
            </motion.div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold gradient-text mb-2">
                {profile.firstName} {profile.lastName}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">{profile.bio}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                A rejoint il y a 3 mois
              </p>
            </div>
            <motion.button 
              onClick={() => setIsEditing(!isEditing)}
              className="btn btn-primary ml-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isEditing ? '✅ Terminer la modification' : '✏️ Modifier'}
            </motion.button>
          </div>

        {/* Edit Form */}
        {isEditing && (
          <form className="mt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Prénom
                </label>
                <input
                  type="text"
                  value={profile.firstName}
                  onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                  className="input"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Nom de Famille
                </label>
                <input
                  type="text"
                  value={profile.lastName}
                  onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                  className="input"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                Adresse Email
              </label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="input"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                Numéro de Téléphone
              </label>
              <input
                type="tel"
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                className="input"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                Biographie
              </label>
              <textarea
                value={profile.bio}
                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                className="input min-h-24"
                placeholder="Écrivez une courte biographie"
              ></textarea>
            </div>

            <button 
              type="button"
              onClick={handleSave}
              className="btn btn-primary w-full"
            >
              💾 Enregistrer les Modifications
            </button>
          </form>
        )}

        {/* Profile Info Display */}
        {!isEditing && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Adresse Email</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">{profile.email}</p>
            </div>
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Numéro de Téléphone</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">{profile.phone}</p>
            </div>
            <div className="col-span-1 md:col-span-2 p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Biographie</p>
              <p className="text-gray-900 dark:text-white mt-1">{profile.bio}</p>
            </div>
          </div>
        )}
      </div>

      {/* Security Section */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          🔐 Sécurité
        </h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 flex justify-between items-center">
            <div>
              <p className="font-semibold text-blue-900 dark:text-blue-200">Changer le Mot de Passe</p>
              <p className="text-sm text-blue-700 dark:text-blue-300">Mettez à jour votre mot de passe</p>
            </div>
            <button className="btn btn-primary">
              Changer
            </button>
          </div>
          <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700 flex justify-between items-center">
            <div>
              <p className="font-semibold text-purple-900 dark:text-purple-200">Authentification Double</p>
              <p className="text-sm text-purple-700 dark:text-purple-300">Activez 2FA pour une protection supplémentaire</p>
            </div>
            <button className="btn btn-primary">
              Activer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
