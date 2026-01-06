'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  
  const menuItems = [
    { icon: '📊', label: 'Tableau de Bord', href: '/dashboard' },
    { icon: '👥', label: 'Utilisateurs', href: '/dashboard/users' },
    { icon: '🔐', label: 'Permissions', href: '#' },
    { icon: '📋', label: 'Rôles', href: '#' },
    { icon: '📊', label: 'Rapports', href: '#' },
    { icon: '⚙️', label: 'Paramètres', href: '/dashboard/settings' },
    { icon: '👤', label: 'Profil', href: '/dashboard/profile' },
  ];

  return (
    <aside className="w-72 bg-gradient-to-b from-slate-900 via-purple-900/90 to-slate-900 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950 min-h-screen h-screen sticky top-20 border-r border-purple-800/50 shadow-2xl overflow-y-auto backdrop-blur-xl relative">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-pink-900/20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative p-8 space-y-8 z-10">
        {/* Header */}
        <motion.div 
          className="space-y-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-black uppercase tracking-widest text-purple-300 drop-shadow-lg">
            ☰ Menu Principal
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50"></div>
        </motion.div>
        
        {/* Navigation */}
        <nav className="space-y-2">
          {menuItems.map((item, idx) => {
            const isActive = pathname === item.href;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`relative flex items-center gap-4 px-4 py-3.5 rounded-xl text-slate-300 transition-all duration-300 group border overflow-hidden ${
                    isActive 
                      ? 'text-white bg-gradient-to-r from-purple-600/80 to-pink-600/80 border-purple-400/50 shadow-lg shadow-purple-500/30' 
                      : 'hover:text-white hover:bg-gradient-to-r hover:from-purple-600/40 hover:to-pink-600/40 border-transparent hover:border-purple-500/50'
                  }`}
                >
                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-pink-400 rounded-r-full"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  
                  {/* Hover Effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  
                  {/* Content */}
                  <motion.span 
                    className="text-2xl relative z-10"
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.span>
                  <span className="font-semibold text-sm relative z-10">
                    {item.label}
                  </span>
                  
                  {/* Shimmer Effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* Divider */}
        <div className="relative">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
          <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent blur-sm"></div>
        </div>

        {/* Support Card */}
        <motion.div 
          className="relative p-5 rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 shadow-2xl border border-purple-400/30 overflow-hidden group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-purple-600/80 to-pink-600/80"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
          
          <div className="relative space-y-3 z-10">
            <motion.div 
              className="text-3xl"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              💬
            </motion.div>
            <div>
              <p className="text-white font-bold text-sm drop-shadow-lg">Besoin d'aide ?</p>
              <p className="text-blue-100/90 text-xs mt-1">Contactez-nous pour obtenir le support technique</p>
            </div>
            <motion.button 
              className="w-full py-2.5 px-3 rounded-lg bg-white text-purple-600 text-sm font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group/btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>📞</span>
                <span>Support</span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </aside>
  );
}
