'use client';

import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {
  Settings, User, Mail, LayoutDashboard,
  Plus, Activity,
  Calendar,
  Clock,
  FileText,
  Filter,
  Menu,
  LogOut
} from 'lucide-react';
import { motion } from 'framer-motion';
import {
  ResponsiveContainer, AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { useRouter } from 'next/navigation'

function StatCard({ label, value, change }: { label: string; value: string | number; change: string }) {
  const isPositive = change.startsWith('+');

  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="bg-background/50 border border-foreground/10 p-4 rounded-lg flex-1 min-w-[250px]"
    >
      <p className="text-sm text-foreground/60">{label}</p>
      <p className="text-2xl font-bold my-2">{value}</p>
      <p className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {change} vs période précédente
      </p>
    </motion.div>
  );
}

const generateData = (range: string) => {
  const data = [];
  const now = new Date();

  if (range === 'hour') {
    for (let i = 0; i < 24; i++) {
      data.push({
        name: `${i}h`,
        uv: Math.floor(Math.random() * 1000),
        pv: Math.floor(Math.random() * 1500),
      });
    }
  } else if (range === 'day') {
    const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(now.getDate() - i);
      data.push({
        name: days[date.getDay()],
        uv: Math.floor(Math.random() * 3000),
        pv: Math.floor(Math.random() * 4500),
        date: date.toLocaleDateString(),
      });
    }
  } else {
    const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
    for (let i = 0; i < 12; i++) {
      data.push({
        name: months[i],
        uv: Math.floor(Math.random() * 10000),
        pv: Math.floor(Math.random() * 15000),
      });
    }
  }
  return data;
};

interface StatPoint {
  name: string;
  uv: number;
  pv: number;
  date?: string; // présent seulement en mode "day"
}


const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [timeRange, setTimeRange] = useState<string>('day');
  const [statsData, setStatsData] = useState<StatPoint[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const projects = [
    { id: 1, title: 'Plateforme E-commerce', status: 'Publié', views: 2543, progress: 90, date: '2024-03-20' },
    { id: 2, title: 'Application Mobile', status: 'Brouillon', views: 0, progress: 45, date: '2024-03-18' },
  ];

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setStatsData(generateData(timeRange));
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [timeRange]);

  const router = useRouter()

  useEffect(() => {
    if (!document.cookie.includes('portfolio-session')) {
      router.push('/login')
    }
  }, [router])

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' })
    router.push('/login')
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center p-4 border-b border-foreground/10">
        <h2 className="text-xl font-bold text-[#00eaff] neon-text">Admin Dashboard</h2>

        <div className="flex items-center gap-2">
          {/* Bouton Déconnexion Mobile */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
            title="Déconnexion"
          >
            <LogOut size={20} />
          </motion.button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:bg-foreground/5 rounded-lg"
          >
            <Menu size={24} className="text-[#00eaff]" />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`w-64 bg-background/90 border-r border-foreground/10 p-4 fixed h-full z-50 
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0`}
      >
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#00eaff] mb-4 neon-text hidden md:block">Admin Dashboard</h2>
          <nav className="space-y-2">
            {[
              { id: 'dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
              { id: 'projects', icon: <FileText size={20} />, label: 'Projets' },
              { id: 'blog', icon: <FileText size={20} />, label: 'Blog' },
              { id: 'messages', icon: <Mail size={20} />, label: 'Messages' },
              { id: 'settings', icon: <Settings size={20} />, label: 'Paramètres' },
            ].map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 p-2 rounded-lg transition-all ${activeTab === item.id
                  ? 'bg-[#00eaff]/10 text-[#00eaff] shadow-[0_0_15px_#00eaff30]'
                  : 'hover:bg-foreground/5'
                  }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </motion.button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:ml-64 flex-1 p-4 md:p-8 overflow-y-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl md:text-3xl font-bold capitalize text-transparent bg-clip-text bg-gradient-to-r from-[#00eaff] to-[#00b4d8]"
          >
            {activeTab}
          </motion.h1>
          <div className="flex items-center gap-4">
            {/* Bouton Déconnexion Desktop */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              <LogOut size={18} />
              <span>Déconnexion</span>
            </motion.button>

            <button className="p-2 hover:bg-foreground/5 rounded-lg transition-all">
              <User size={24} className="text-[#00eaff]" />
            </button>
          </div>
        </div>

        {/* Dynamic Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Filters */}
              <div className="flex flex-col gap-4 p-4 bg-background/50 border border-foreground/10 rounded-xl">
                <div className="flex items-center gap-2">
                  <Filter size={18} />
                  <span className="font-medium">Période :</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: 'hour', label: 'Par heure', icon: <Clock size={16} /> },
                    { value: 'day', label: 'Par jour', icon: <Calendar size={16} /> },
                    { value: 'month', label: 'Par mois', icon: <Activity size={16} /> }
                  ].map((filter) => (
                    <motion.button
                      key={filter.value}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`px-4 py-2 rounded-lg flex items-center gap-2 text-sm flex-1 md:flex-none min-w-[120px] ${timeRange === filter.value
                        ? 'bg-[#00eaff] text-background'
                        : 'bg-foreground/5 hover:bg-foreground/10'
                        }`}
                      onClick={() => setTimeRange(filter.value)}
                    >
                      {filter.icon}
                      {filter.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Chart */}
              <div className="bg-background/50 border border-foreground/10 p-6 rounded-xl min-h-[400px]">
                {isLoading ? (
                  <div className="flex items-center justify-center h-64">
                    <div className="animate-pulse flex flex-col items-center gap-4">
                      <div className="w-10 h-10 bg-[#00eaff]/20 rounded-full" />
                      <p className="text-foreground/80">Chargement des données...</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className="text-lg font-bold mb-4">
                      Statistiques de trafic -{' '}
                      {timeRange === 'hour' ? '24 dernières heures' :
                        timeRange === 'day' ? '7 derniers jours' : '12 derniers mois'}
                    </h3>
                    <div className="h-64 w-full overflow-x-auto">
                      <ResponsiveContainer width="100%" minWidth={400} height="100%">
                        <AreaChart data={statsData}>
                          <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#00eaff" stopOpacity={0.8} />
                              <stop offset="95%" stopColor="#00eaff" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <XAxis dataKey="name" tick={{ fill: '#94a3b8' }} />
                          <YAxis tick={{ fill: '#94a3b8' }} />
                          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                          <Tooltip
                            contentStyle={{
                              background: '#020617',
                              borderColor: '#1e293b',
                              borderRadius: '0.5rem'
                            }}
                          />
                          <Area
                            type="monotone"
                            dataKey="uv"
                            name="Visiteurs uniques"
                            stroke="#00eaff"
                            fillOpacity={1}
                            fill="url(#colorUv)"
                          />
                          <Area
                            type="monotone"
                            dataKey="pv"
                            name="Pages vues"
                            stroke="#64748b"
                            fillOpacity={0.5}
                            fill="#64748b33"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </>
                )}
              </div>

              {/* Stats Grid */}
              {!isLoading && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <StatCard
                    label="Visiteurs totaux"
                    value={statsData.reduce((sum, item) => sum + item.uv, 0).toLocaleString()}
                    change="+12%"
                  />
                  <StatCard
                    label="Pages vues totales"
                    value={statsData.reduce((sum, item) => sum + item.pv, 0).toLocaleString()}
                    change="+8%"
                  />
                  <StatCard
                    label="Moyenne par jour"
                    value={Math.floor(statsData.reduce((sum, item) => sum + item.uv, 0) / statsData.length).toLocaleString()}
                    change="+5%"
                  />
                </div>
              )}
            </div>
          )}

          {/* Projects/Blog Section */}
          {['projects', 'blog'].includes(activeTab) && (
            <div className="bg-background/50 border border-foreground/10 rounded-xl overflow-hidden">
              <div className="p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-foreground/10">
                <h2 className="text-xl font-bold">
                  Gestion des {activeTab === 'projects' ? 'Projets' : 'Articles'}
                </h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-[#00eaff] text-background px-4 py-2 rounded-lg hover:bg-[#00eaff]/90 transition-all w-full md:w-auto"
                >
                  <Plus size={18} />
                  Ajouter
                </motion.button>
              </div>
              <div style={{ height: 'auto', minHeight: '400px', overflowX: 'auto' }}>
                <DataGrid
                  autoHeight
                  className="min-w-[800px] md:min-w-0"
                  rows={activeTab === 'projects' ? projects : []}
                  columns={[
                    {
                      field: 'title',
                      headerName: 'Titre',
                      width: 250,
                      headerClassName: 'font-bold'
                    },
                    {
                      field: 'status',
                      headerName: 'Statut',
                      width: 150,
                      renderCell: (params) => (
                        <span className={`px-2 py-1 rounded-full text-xs ${params.value === 'Publié'
                          ? 'bg-green-500/20 text-green-500'
                          : 'bg-yellow-500/20 text-yellow-500'
                          }`}>
                          {params.value}
                        </span>
                      )
                    },
                    { field: 'views', headerName: 'Vues', width: 120 },
                    {
                      field: 'progress',
                      headerName: 'Progression',
                      width: 180,
                      renderCell: (params) => (
                        <div className="w-full flex items-center gap-2">
                          <div className="w-full bg-foreground/10 rounded-full h-2">
                            <div
                              className="bg-[#00eaff] h-2 rounded-full transition-all duration-500"
                              style={{ width: `${params.value}%` }}
                            />
                          </div>
                          <span className="text-xs text-foreground/60">{params.value}%</span>
                        </div>
                      )
                    },
                  ]}
                  pageSizeOptions={[5, 10]}
                  checkboxSelection
                  sx={{
                    '& .MuiDataGrid-cell:focus': { outline: 'none' },
                    '& .Mui-checked': { color: '#00eaff !important' },
                  }}
                />
              </div>
            </div>
          )}

          {/* Messages Section */}
          {activeTab === 'messages' && (
            <div className="bg-background/50 border border-foreground/10 rounded-xl overflow-hidden">
              <div className="p-4 border-b border-foreground/10">
                <h2 className="text-xl font-bold">Messages reçus</h2>
              </div>
              <div className="divide-y divide-foreground/10">
                {Array.from({ length: 10 }).map((_, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ backgroundColor: 'rgba(0, 234, 255, 0.05)' }}
                    className={`p-4 transition-all cursor-pointer ${i % 3 === 0 ? 'bg-[#00eaff]/10' : ''}`}
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${i % 3 === 0 ? 'bg-[#00eaff]' : 'bg-foreground/20'}`} />
                        <div>
                          <h4 className="font-medium">Contact {i + 1}</h4>
                          <p className="text-foreground/80 text-sm">contact{i}@exemple.com</p>
                        </div>
                      </div>
                      <span className="text-sm text-foreground/60">2024-03-{20 - i}</span>
                    </div>
                    <p className="mt-2 text-foreground/80 pl-5">
                      Message concernant le projet #{i + 100}...
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-background/50 border border-foreground/10 rounded-xl overflow-hidden p-6">
              <h2 className="text-xl font-bold mb-4">Paramètres du compte</h2>
              <div className="space-y-4">
                <div className="p-4 bg-background/20 rounded-lg">
                  <h3 className="font-medium mb-2">Informations personnelles</h3>
                  <p className="text-foreground/80">Gérer vos informations de contact et votre profil</p>
                </div>
                <div className="p-4 bg-background/20 rounded-lg">
                  <h3 className="font-medium mb-2">Sécurité</h3>
                  <p className="text-foreground/80">Changer votre mot de passe et paramètres de sécurité</p>
                </div>
                <div className="p-4 bg-background/20 rounded-lg">
                  <h3 className="font-medium mb-2">Préférences</h3>
                  <p className="text-foreground/80">Personnaliser votre expérience utilisateur</p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardPage;