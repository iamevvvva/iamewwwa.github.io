import App from '@/app/App';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { ErrorBoundary } from '@/app/provider/ErrorBoundary/ui/ErrorBoundary';
import { MainPage } from '@/pages/MainPage';
import { EtchingPage } from '@/pages/EtchingPage';
import { IllustrationPage } from '@/pages/IllustrationPage';
import GraphicsPage from '@/pages/GraphicsPage/ui/GraphicsPage/GraphicsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      }>
      <Route path="/" element={<MainPage />} />
      <Route path="/etching" element={<EtchingPage />} />
      <Route path="/illustration" element={<IllustrationPage />} />
      <Route path="/graphics" element={<GraphicsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);
