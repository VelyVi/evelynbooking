import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import AppRouter from './routes/AppRouter.jsx';
import { Toaster } from 'react-hot-toast';

import './index.css';

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<AppRouter />
		<Toaster />
	</BrowserRouter>,
);
