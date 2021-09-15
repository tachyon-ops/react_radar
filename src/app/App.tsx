import React from 'react';

import { Radar } from '../radar/Radar';
import { TechList } from '../components/tech/TechList';
import { RadarFilter } from '../components/radar/RadarFilter';
import { DataLists } from '../components/lists/DataLists';

import './App.scss';
import { CenterColumn } from './layout/CenterColumn';
import { Layout } from './layout/Layout';
import { LeftColumn } from './layout/LeftColumn';
import { RightColumn } from './layout/RightColumn';

export const App: React.FC = () => (
  <div className="App">
    <Layout>
      <LeftColumn>
        <TechList />
        <RadarFilter />
      </LeftColumn>

      <CenterColumn>
        <Radar />
      </CenterColumn>

      <RightColumn>
        <DataLists />
      </RightColumn>
    </Layout>
  </div>
);
