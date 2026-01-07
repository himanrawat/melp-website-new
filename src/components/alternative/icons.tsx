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
	AlertCircle,
	Clock,
	CheckCircle,
	ArrowRight,
	MessageSquare,
	Network,
	MessageCircle,
	ListChecks,
	Link,
	Eye,
	AlertTriangle,
	Lock,
	FileText,
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
	AlertCircle,
	Clock,
	CheckCircle,
	ArrowRight,
	MessageSquare,
	Network,
	MessageCircle,
	ListCheck: ListChecks,
	Link,
	Eye,
	AlertTriangle,
	Lock,
	FileText,
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

