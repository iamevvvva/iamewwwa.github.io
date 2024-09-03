import { createRoot } from 'react-dom/client';

import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';

import '@/app/styles/index.scss';

import { AppRouter } from '@/app/provider/router/ui/AppRouter';

const domNode = document.getElementById('root') as HTMLElement;
const root = createRoot(domNode);

root.render(
  <>
    <RouterProvider router={AppRouter} />
  </>,
);
