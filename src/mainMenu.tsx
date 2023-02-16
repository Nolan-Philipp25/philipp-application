import SendIcon from '@mui/icons-material/Send'
import DraftsIcon from '@mui/icons-material/Drafts'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import StarBorder from '@mui/icons-material/StarBorder'
import FolderIcon from '@mui/icons-material/Folder'

export interface IMenuItem {
    label: string
    icon?: any
    items?: IMenuItem[]
}

const menu: IMenuItem[] = [
    {
        label: 'Sent mail',
        icon: <SendIcon />,
    },
    {
        label: 'Drafts',
        icon: <DraftsIcon />,
        items: [
            {
                label: 'Sub Item 1',
                icon: <StarBorder />,
            },
            {
                label: 'Sub Item 2',
            },
        ],
    },
    {
        label: 'Inbox',
        icon: <InboxIcon />,
        items: [
            {
                label: 'Open Folder',
                icon: <FolderIcon />,
            },
        ],
    },
]

export default menu
