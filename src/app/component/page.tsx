import EnterpriseChatDashboard from "@/components/dashboard/EnterpriseChatDashboard";
import EncryptedStyleHeading from "@/components/headings/EncryptedStyleHeading";

export const metadata = {
	title: "Component Preview | Melp",
	description: "Direct access to the chat dashboard component.",
};

export default function ComponentPage() {
	return (
		<>
			<EncryptedStyleHeading
				staticText="Work securely. Collaborate with"
				rotatingWords={[
					"encrypted messaging",
					"AI intelligence",
					"protected storage",
					"confidence",
				]}
				displayDurationMs={3000}
				revealDelayMs={60}
				className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
				encryptedClassName="text-[#F14C2F]/50"
				revealedClassName="bg-gradient-to-r from-[#F14C2F] to-[#FF0059] bg-clip-text text-transparent"
			/>
			<EnterpriseChatDashboard />
		</>
	);
}
