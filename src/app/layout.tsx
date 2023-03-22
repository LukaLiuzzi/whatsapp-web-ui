import { ConversationProvider } from '@/context/ConversationContext';
import '../styles/globals.css';

interface RootLayoutProps {
	children: React.ReactNode;
}

export const metadata = {
	title: 'Whatsapp App',
	description: 'Whatsapp App',
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang='es'>
			<ConversationProvider>
				<body>{children}</body>
			</ConversationProvider>
		</html>
	);
}
