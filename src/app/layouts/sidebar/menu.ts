import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    {
        id: 2,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'bx-home-circle',
        subItems: [
            {
                id: 3,
                label: 'MENUITEMS.DASHBOARDS.LIST.DEFAULT',
                link: '/dashboard',
                parentId: 2
            },
            {
                id: 4,
                label: 'MENUITEMS.DASHBOARDS.LIST.SAAS',
                link: '/dashboards/saas',
                parentId: 2
            },
   
         ]
    },
    {
        id: 8,
        isLayout: true
    },

    {
        id: 49,
        label: 'MENUITEMS.CONTACTS.TEXT',
        icon: 'bxs-user-detail',
        subItems: [
            {
                id: 50,
                label: 'MENUITEMS.CONTACTS.LIST.USERGRID',
                link: '/contacts/grid',
                parentId: 49
            },
            {
                id: 51,
                label: 'MENUITEMS.CONTACTS.LIST.USERLIST',
                link: '/contacts/list',
                parentId: 49
            },
            {
                id: 52,
                label: 'MENUITEMS.CONTACTS.LIST.PROFILE',
                link: '/contacts/profile',
                parentId: 49
            }
        ]
    },
    {
        id: 57,
        label: 'MENUITEMS.JOBS.TEXT',
        icon: 'bx-briefcase-alt',
        subItems: [
            {
                id: 58,
                label: 'MENUITEMS.JOBS.LIST.JOBLIST',
                link: '/jobs/list',
                parentId: 57
            },
            {
                id: 59,
                label: 'MENUITEMS.JOBS.LIST.JOBGRID',
                link: '/jobs/grid',
                parentId: 57
            },
            {
                id: 60,
                label: 'MENUITEMS.JOBS.LIST.APPLYJOB',
                link: '/jobs/apply',
                parentId: 57
            },
            {
                id: 61,
                label: 'MENUITEMS.JOBS.LIST.JOBDETAILS',
                link: '/jobs/details',
                parentId: 57
            },
            {
                id: 62,
                label: 'MENUITEMS.JOBS.LIST.JOBCATEGORIES',
                link: '/jobs/categories',
                parentId: 57
            },
        ]
    },
    {
        id: 66,
        label: 'MENUITEMS.PAGES.TEXT',
        isTitle: true
    },
    {
        id: 67,
        label: 'MENUITEMS.AUTHENTICATION.TEXT',
        icon: 'bx-user-circle',
        subItems: [
            {
                id: 68,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN',
                link: '/account/login',
                parentId: 67
            },
            {
                id: 69,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN2',
                link: '/account/login-2',
                parentId: 67
            },
            {
                id: 70,
                label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER',
                link: '/account/signup',
                parentId: 67
            },
            {
                id: 71,
                label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER2',
                link: '/account/signup-2',
                parentId: 67
            },
            {
                id: 72,
                label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD',
                link: '/account/reset-password',
                parentId: 67
            },
            {
                id: 73,
                label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD2',
                link: '/account/recoverpwd-2',
                parentId: 67
            },
            {
                id: 74,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN',
                link: '/pages/lock-screen-1',
                parentId: 67
            },
            {
                id: 75,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN2',
                link: '/pages/lock-screen-2',
                parentId: 67
            },
            {
                id: 76,
                label: 'MENUITEMS.AUTHENTICATION.LIST.CONFIRMMAIL',
                link: '/pages/confirm-mail',
                parentId: 67
            },
            {
                id: 77,
                label: 'MENUITEMS.AUTHENTICATION.LIST.CONFIRMMAIL2',
                link: '/pages/confirm-mail-2',
                parentId: 67
            },
            {
                id: 78,
                label: 'MENUITEMS.AUTHENTICATION.LIST.EMAILVERIFICATION',
                link: '/pages/email-verification',
                parentId: 67
            },
            {
                id: 79,
                label: 'MENUITEMS.AUTHENTICATION.LIST.EMAILVERIFICATION2',
                link: '/pages/email-verification-2',
                parentId: 67
            },
            {
                id: 80,
                label: 'MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION',
                link: '/pages/two-step-verification',
                parentId: 67
            },
            {
                id: 81,
                label: 'MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION2',
                link: '/pages/two-step-verification-2',
                parentId: 67
            }
        ]
    },
    {
        id: 82,
        label: 'MENUITEMS.UTILITY.TEXT',
        icon: 'bx-file',
        subItems: [
            {
                id: 83,
                label: 'MENUITEMS.UTILITY.LIST.STARTER',
                link: '/pages/starter',
                parentId: 82
            },
            {
                id: 84,
                label: 'MENUITEMS.UTILITY.LIST.MAINTENANCE',
                link: '/pages/maintenance',
                parentId: 82
            },
       
            {
                id: 89,
                label: 'MENUITEMS.UTILITY.LIST.ERROR404',
                link: '/pages/404',
                parentId: 82
            },
            {
                id: 90,
                label: 'MENUITEMS.UTILITY.LIST.ERROR500',
                link: '/pages/500',
                parentId: 82
            },
        ]
    },
    {
        id: 91,
        label: 'MENUITEMS.COMPONENTS.TEXT',
        isTitle: true
    },
    {
        id: 92,
        label: 'MENUITEMS.UIELEMENTS.TEXT',
        icon: 'bx-tone',
        subItems: [
            {
                id: 93,
                label: 'MENUITEMS.UIELEMENTS.LIST.ALERTS',
                link: '/ui/alerts',
                parentId: 92
            },
            {
                id: 94,
                label: 'MENUITEMS.UIELEMENTS.LIST.BUTTONS',
                link: '/ui/buttons',
                parentId: 92
            },
            {
                id: 102,
                label: 'MENUITEMS.UIELEMENTS.LIST.RANGESLIDER',
                link: '/ui/rangeslider',
                parentId: 92
            },
       
            {
                id: 105,
                label: 'MENUITEMS.UIELEMENTS.LIST.SWEETALERT',
                link: '/ui/sweet-alert',
                parentId: 92
            },
            {
                id: 106,
                label: 'MENUITEMS.UIELEMENTS.LIST.TABS',
                link: '/ui/tabs-accordions',
                parentId: 92
            },
            {
                id: 107,
                label: 'MENUITEMS.UIELEMENTS.LIST.TYPOGRAPHY',
                link: '/ui/typography',
                parentId: 92
            },
      
            {
                id: 110,
                label: 'MENUITEMS.UIELEMENTS.LIST.GENERAL',
                link: '/ui/general',
                parentId: 92
            },
            {
                id: 111,
                label: 'MENUITEMS.UIELEMENTS.LIST.COLORS',
                link: '/ui/colors',
                parentId: 92
            },
            {
                id: 113,
                label: 'MENUITEMS.UIELEMENTS.LIST.NOTIFICATION',
                link: '/ui/notification',
                parentId: 92
            },
            {
                id: 114,
                label: 'MENUITEMS.UIELEMENTS.LIST.UTILITIES',
                link: '/ui/utilities',
                parentId: 92
            },
       
        ]
    },
    {
        id: 116,
        label: 'MENUITEMS.FORMS.TEXT',
        icon: 'bxs-eraser',
        badge: {
            variant: 'danger',
            text: 'MENUITEMS.FORMS.BADGE',
        },
        subItems: [
            {
                id: 117,
                label: 'MENUITEMS.FORMS.LIST.ELEMENTS',
                link: '/form/elements',
                parentId: 116
            },
            {
                id: 118,
                label: 'MENUITEMS.FORMS.LIST.LAYOUTS',
                link: '/form/layouts',
                parentId: 116
            },
            {
                id: 119,
                label: 'MENUITEMS.FORMS.LIST.VALIDATION',
                link: '/form/validation',
                parentId: 116
            },
            {
                id: 120,
                label: 'MENUITEMS.FORMS.LIST.ADVANCED',
                link: '/form/advanced',
                parentId: 116
            },
            {
                id: 123,
                label: 'MENUITEMS.FORMS.LIST.REPEATER',
                link: '/form/repeater',
                parentId: 116
            },
            {
                id: 124,
                label: 'MENUITEMS.FORMS.LIST.WIZARD',
                link: '/form/wizard',
                parentId: 116
            },
            {
                id: 125,
                label: 'MENUITEMS.FORMS.LIST.MASK',
                link: '/form/mask',
                parentId: 116
            }
        ]
    },
    {
        id: 126,
        icon: 'bx-list-ul',
        label: 'MENUITEMS.TABLES.TEXT',
        subItems: [
            {
                id: 127,
                label: 'MENUITEMS.TABLES.LIST.BASIC',
                link: '/tables/basic',
                parentId: 126
            },
            {
                id: 128,
                label: 'MENUITEMS.TABLES.LIST.DataTables',
                link: '/tables/advanced',
                parentId: 126
            }
        ]
    },
    {
        id: 130,
        icon: 'bxs-bar-chart-alt-2',
        label: 'MENUITEMS.CHARTS.TEXT',
        subItems: [
            {
                id: 131,
                label: 'MENUITEMS.CHARTS.LIST.APEX',
                link: '/charts/apex',
                parentId: 130
            },
            {
                id: 132,
                label: 'MENUITEMS.CHARTS.LIST.CHARTJS',
                link: '/charts/chartjs',
                parentId: 131
            },
            {
                id: 133,
                label: 'MENUITEMS.CHARTS.LIST.CHARTIST',
                link: '/charts/chartist',
                parentId: 131
            },
            {
                id: 134,
                label: 'MENUITEMS.CHARTS.LIST.ECHART',
                link: '/charts/echart',
                parentId: 131
            }
        ]
    },
    {
        id: 135,
        label: 'MENUITEMS.ICONS.TEXT',
        icon: 'bx-aperture',
        subItems: [
            {
                id: 136,
                label: 'MENUITEMS.ICONS.LIST.BOXICONS',
                link: '/icons/boxicons',
                parentId: 135
            },
            {
                id: 137,
                label: 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
                link: '/icons/materialdesign',
                parentId: 135
            },
            {
                id: 138,
                label: 'MENUITEMS.ICONS.LIST.DRIPICONS',
                link: '/icons/dripicons',
                parentId: 135
            },
            {
                id: 139,
                label: 'MENUITEMS.ICONS.LIST.FONTAWESOME',
                link: '/icons/fontawesome',
                parentId: 135
            },
        ]
    },

    {
        id: 143,
        label: 'MENUITEMS.MULTILEVEL.TEXT',
        icon: 'bx-share-alt',
        subItems: [
            {
                id: 144,
                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.1',
                parentId: 143
            },
            {
                id: 145,
                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.2',
                parentId: 143,
                subItems: [
                    {
                        id: 146,
                        label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.1',
                        parentId: 145,
                    },
                    {
                        id: 147,
                        label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.2',
                        parentId:145,
                    }
                ]
            },
        ]
    }
];

