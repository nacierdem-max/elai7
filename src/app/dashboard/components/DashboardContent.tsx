'use client';
import React from 'react';

import KPIBentoGrid from './KPIBentoGrid';
import AIQueryBar from './AIQueryBar';
import WorkloadChartSection from './WorkloadChartSection';
import RiskAlertList from './RiskAlertList';
import ActivityFeed from './ActivityFeed';
import TopEngineersWorkload from './TopEngineersWorkload';

import { type PersonnelRoleKey } from '@/data/mockData';

// Role-specific quick access links shown in the welcome banner
const ROLE_QUICK_LINKS: Record<PersonnelRoleKey, { label: string; href: string; emoji: string }[]> = {
  'arge-personeli': [
    { label: 'Görevlerim', href: '/task-kanban-panel', emoji: '📋' },
    { label: 'Ekip', href: '/team', emoji: '👥' },
    { label: 'Dosyalar', href: '/files', emoji: '📁' },
  ],
  'proje-lideri': [
    { label: 'Projeler', href: '/projects', emoji: '🗂️' },
    { label: 'Riskler', href: '/risks', emoji: '⚠️' },
    { label: 'Ekip Takvimi', href: '/team', emoji: '📅' },
    { label: 'Log', href: '/logs', emoji: '📊' },
  ],
  'departman-lideri': [
    { label: 'Projeler', href: '/projects', emoji: '🗂️' },
    { label: 'Ekip & Personel', href: '/team', emoji: '👥' },
    { label: 'Analytics', href: '/analytics', emoji: '📈' },
    { label: 'Riskler', href: '/risks', emoji: '⚠️' },
  ],
  'urun-yoneticisi': [
    { label: 'Projeler', href: '/projects', emoji: '🗂️' },
    { label: 'AI Asistan', href: '/analytics', emoji: '🤖' },
    { label: 'Riskler', href: '/risks', emoji: '⚠️' },
    { label: 'Log', href: '/logs', emoji: '📊' },
  ],
  'arge-temsilcisi': [
    { label: 'Log', href: '/logs', emoji: '📊' },
    { label: 'Analytics', href: '/analytics', emoji: '📈' },
    { label: 'Projeler', href: '/projects', emoji: '🗂️' },
    { label: 'Riskler', href: '/risks', emoji: '⚠️' },
  ],
  'arge-yoneticisi': [
    { label: 'Projeler', href: '/projects', emoji: '🗂️' },
    { label: 'AI Asistan', href: '/analytics', emoji: '🤖' },
    { label: 'Log', href: '/logs', emoji: '📊' },
    { label: 'Riskler', href: '/risks', emoji: '⚠️' },
    { label: 'Ekip', href: '/team', emoji: '👥' },
  ],
};

export default function DashboardContent() {
  return (
    <div className="space-y-6">
      {/* AI Query Bar */}
      <AIQueryBar />

      {/* KPI Bento Grid */}
      <KPIBentoGrid />

      {/* Charts row */}
      <WorkloadChartSection />

      {/* Bottom row: Risk alerts + Activity + Top engineers */}
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6">
        <RiskAlertList />
        <ActivityFeed />
        <TopEngineersWorkload />
      </div>
    </div>
  );
}