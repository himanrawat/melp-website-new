export type SidebarItem = {
	label: string;
	href?: string;
};

export type SidebarCategory = {
	title: string;
	items: SidebarItem[];
};

export const sidebarCategories: SidebarCategory[] = [
	{
		title: "Getting started",
		items: [
			{
				label: "Welcome to MelpApp",
				href: "/resources/help/get-started#welcome",
			},
			{
				label: "Features",
				href: "/resources/help/get-started#features",
			},
			{
				label: "Create Account",
				href: "/resources/help/get-started#create-account",
			},
			{
				label: "Invite Others",
				href: "/resources/help/get-started#invite-others",
			},
			{
				label: "Forgot Password",
				href: "/resources/help/get-started#forgot-password",
			},
		],
	},
	{
		title: "Personalize MelpApp",
		items: [
			{
				label: "Set Your Status",
				href: "/resources/help/personalize-melpapp#SetYourStatus",
			},
			{
				label: "Manage Your Account",
				href: "/resources/help/personalize-melpapp#ManageYourAccount",
			},
			{
				label: "Build Your Profile",
				href: "/resources/help/personalize-melpapp#BuildYourProfile",
			},
			{
				label: "Customize Your Preferences",
				href: "/resources/help/personalize-melpapp#CustomizeYourPreferences",
			},
		],
	},
	{
		title: "Calls",
		items: [
			{
				label: "Voice & Video Calling",
				href: "/resources/help/calls#callSomeoneInNetwork",
			},
			{
				label: "Receive Voice or Video Calls",
				href: "/resources/help/calls#howToRecieveAudioVideo",
			},
			{
				label: "Team or Group Conferences",
				href: "/resources/help/calls#callConferences",
			},
			{ label: "Personal Room", href: "/resources/help/calls#personalRoom" },
			{
				label: "Advanced In-Call Tools",
				href: "/resources/help/calls#advancedTool",
			},
		],
	},
	{
		title: "Teams and Topics",
		items: [
			{
				label: "What are Teams and Topics",
				href: "/resources/help/teams-topic#whatAreTeamsAndTopics",
			},
			{
				label: "Create a Team",
				href: "/resources/help/teams-topic#howToCreateTeam",
			},
			{
				label: "Create a Topic",
				href: "/resources/help/teams-topic#howToCreateTopic",
			},
			{
				label: "Add or Remove Team Members",
				href: "/resources/help/teams-topic#howToRemoveMember",
			},
			{
				label: "Assign or Remove Admin Access",
				href: "/resources/help/teams-topic#howToAssignRemoveAdmin",
			},
		],
	},
	{
		title: "Groups",
		items: [
			{
				label: "Difference between Teams and Groups",
				href: "/resources/help/create-group#differenceTeamGroup",
			},
			{
				label: "Create a Group",
				href: "/resources/help/create-group#howToCreateGroup",
			},
			{
				label: "Add or Remove Group Members",
				href: "/resources/help/create-group#howToAddOrRemoveGroupMembers",
			},
			{
				label: "Assign or Remove Group Admin Access",
				href: "/resources/help/create-group#howToAddOrRemoveGroupAdminAccess",
			},
		],
	},
	{
		title: "Meetings",
		items: [
			{
				label: "Schedule a Meeting",
				href: "/resources/help/schedule-meeting#howToScheduleMeeting",
			},
			{
				label: "Join a Meeting",
				href: "/resources/help/schedule-meeting#joinMeeting",
			},
			{
				label: "Schedule with Non-Melp Users",
				href: "/resources/help/schedule-meeting#howToScheduleMeetingNonMelper",
			},
			{
				label: "Recurring Meetings",
				href: "/resources/help/schedule-meeting#howToScheduleRecurringMeeting",
			},
			{
				label: "Book an Appointment",
				href: "/resources/help/schedule-meeting#bookAnAppointment",
			},
			{
				label: "Calendar Syncing",
				href: "/resources/help/schedule-meeting#calendarSyncing",
			},
			{
				label: "Record a Meeting",
				href: "/resources/help/schedule-meeting#recordMeeting",
			},
		],
	},
	{
		title: "Chats",
		items: [
			{
				label: "Melp's AI - Draft for Me",
				href: "/resources/help/chats#melpai",
			},
			{
				label: "Real-Time Chat Translation",
				href: "/resources/help/chats#chatTranslation",
			},
			{ label: "Write and Share", href: "/resources/help/chats#post" },
			{ label: "Chat Search", href: "/resources/help/chats#chatSearch" },
			{ label: "Quick Message", href: "/resources/help/chats#quickmessage" },
			{ label: "Email Your Chat", href: "/resources/help/chats#emailYourChat" },
		],
	},
	{
		title: "Book an Appointment",
		items: [
			{
				label: "Setting Your Availability",
				href: "/resources/help/book-appointment#settingAvailability",
			},
			{
				label: "How to Create an Event",
				href: "/resources/help/book-appointment#createEvent",
			},
			{
				label: "Managing Your Event",
				href: "/resources/help/book-appointment#ManagingEvent",
			},
			{
				label: "Customize Your Calendar Link",
				href: "/resources/help/book-appointment#CustomizeCalendarLink",
			},
		],
	},
	{
		title: "Melp Drive",
		items: [
			{
				label: "Key Functionalities",
				href: "/resources/help/melp-drive#keyFunction",
			},
			{
				label: "Upload or Create Files & Folders",
				href: "/resources/help/melp-drive#uploadFile",
			},
			{
				label: "Collaboration & Smart Sharing",
				href: "/resources/help/melp-drive#sharing",
			},
			{ label: "Melp Suite", href: "/resources/help/melp-drive#melpsuite" },
			{
				label: "Organize Team Folders",
				href: "/resources/help/melp-drive#teamOrganize",
			},
			{
				label: "Search, Filter & Version History",
				href: "/resources/help/melp-drive#versionHistory",
			},
		],
	},
];
