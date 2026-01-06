'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    notifications: true,
    emailUpdates: true,
    darkMode: false,
    language: 'fr',
    theme: 'blue',
  });

  const handleToggle = (key: string) => {
    setSettings({
      ...settings,
      [key]: !settings[key],
    });
  };

  const handleChange = (key: string, value: string) => {
    setSettings({
      ...settings,
      [key]: value,
    });
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold gradient-text mb-2">Paramètres ⚙️</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">Personnalisez votre expérience du système</p>
      </motion.div>

      {/* Display Settings */}
      <motion.div 
        className="card relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold gradient-text mb-6">
            🎨 Paramètres d'Affichage
          </h2>
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">Mode Sombre</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Activer le mode sombre</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.darkMode}
                onChange={() => handleToggle('darkMode')}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Couleur Préférée
            </label>
            <div className="grid grid-cols-5 gap-3">
              {['blue', 'purple', 'pink', 'green', 'orange'].map((color) => (
                <button
                  key={color}
                  onClick={() => handleChange('theme', color)}
                  className={`w-12 h-12 rounded-lg transition-all ${
                    settings.theme === color
                      ? 'ring-2 ring-offset-2 ring-blue-500'
                      : ''
                  }`}
                  style={{
                    backgroundColor: color === 'blue' ? '#3B82F6' :
                                   color === 'purple' ? '#A855F7' :
                                   color === 'pink' ? '#EC4899' :
                                   color === 'green' ? '#10B981' :
                                   '#F97316'
                  }}
                />
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Langue
            </label>
            <select
              value={settings.language}
              onChange={(e) => handleChange('language', e.target.value)}
              className="input w-full md:w-40"
            >
              <option value="fr">Français</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </motion.div>

      {/* Notification Settings */}
      <motion.div 
        className="card relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold gradient-text mb-6">
            🔔 Paramètres de Notification
          </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">Activer les Notifications</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Recevoir les notifications du système</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.notifications}
                onChange={() => handleToggle('notifications')}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">Mises à Jour par Email</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Recevoir les mises à jour par email</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.emailUpdates}
                onChange={() => handleToggle('emailUpdates')}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </motion.div>

      {/* Danger Zone */}
      <motion.div 
        className="card border-2 border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50 to-red-100/50 dark:from-red-900/20 dark:to-red-800/20 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-red-900 dark:text-red-200 mb-6">
            ⚠️ Zone Dangereuse
          </h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-red-100 dark:bg-red-900/50 flex justify-between items-center">
            <div>
              <p className="font-semibold text-red-900 dark:text-red-200">Supprimer le Compte</p>
              <p className="text-sm text-red-700 dark:text-red-300">Supprimer votre compte de manière permanente</p>
            </div>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium">
              Supprimer
            </button>
          </div>
        </div>
      </motion.div>

      {/* Save Button */}
      <motion.div 
        className="flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.button 
          className="btn btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          💾 Enregistrer les Modifications
        </motion.button>
        <motion.button 
          className="btn btn-secondary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ↩️ Réinitialiser
        </motion.button>
      </motion.div>
    </div>
  );
}
