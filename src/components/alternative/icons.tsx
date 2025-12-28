"use client";

import {
	Layers,
	SlidersHorizontal,
	Users,
	LayoutGrid,
	Bot,
	Sparkles,
	Zap,
	Globe,
	Shield,
	Video,
	MessageSquareOff,
	Calendar,
	LucideIcon,
} from "lucide-react";
import { IconName } from "./types";

const iconMap: Record<IconName, LucideIcon> = {
	Layers,
	SlidersHorizontal,
	Users,
	LayoutGrid,
	Bot,
	Sparkles,
	Zap,
	Globe,
	Shield,
	Video,
	MessageSquareOff,
	Calendar,
};

interface IconProps {
	name: IconName;
	className?: string;
}

export function Icon({ name, className }: IconProps) {
	const IconComponent = iconMap[name];
	if (!IconComponent) {
		return null;
	}
	return <IconComponent className={className} />;
}

export function getIcon(name: IconName): LucideIcon {
	return iconMap[name];
}
