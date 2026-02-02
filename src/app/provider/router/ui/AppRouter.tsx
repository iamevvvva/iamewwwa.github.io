import App from '@/app/App';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { ErrorBoundary } from '@/app/provider/ErrorBoundary/ui/ErrorBoundary';
import { MainPage } from '@/views/MainPage';
import EtchingPage from '@/views/EtchingPage/ui/EtchingPage/EtchingPage';
import IllustrationPage from '@/views/IllustrationPage/ui/IllustrationPage/IllustrationPage';
import GraphicsPage from '@/views/GraphicsPage/ui/GraphicsPage/GraphicsPage';
import { NotFoundPage } from '@/views/NotFoundPage';

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
