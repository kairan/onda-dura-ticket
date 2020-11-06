import React from 'react';

import '@fortawesome/fontawesome-free/css/all.css';

const Icon = (({ className='', tag, children, title, iclass='', ...others }) => <span title={title} {...others} className={`icon ${className}`}>
  <i className={`fas ${tag} ${iclass}`}/>
</span>);

const IconFab = (({ className='', tag, children, title, iclass='', ...others }) => <span title={title} {...others} className={`icon ${className}`}>
  <i className={`fab ${tag} ${iclass}`}/>
</span>);

const IconFar = (({ className='', tag, children, title, iclass='', ...others  }) => <span title={title} {...others} className={`icon ${className}`}>
  <i className={`far ${tag} ${iclass}`}/>
</span>);

export const CogIcon = props => <Icon tag="fa-cog" {...props}/>;
export const UserIcon = props =>  <Icon tag="fa-user" {...props}/>;
export const UsersIcon = props =>  <Icon tag="fa-users" {...props}/>;
export const ShoppingBagIcon = props => <Icon tag="fa-shopping-bag" {...props}/>;
export const SearchIcon = props => <Icon tag="fa-search" {...props}/>;
export const ChartLineIcon = props => <Icon tag="fa-chart-line" {...props}/>;
export const HomeIcon = props => <Icon tag="fa-home" {...props}/>;
export const CaretDownIcon = props => <Icon tag="fa-caret-down" {...props}/>;
export const CaretRightIcon = props => <Icon tag="fa-caret-right" {...props}/>;
export const CaretLeftIcon = props => <Icon tag="fa-caret-left" {...props}/>;
export const CaretUpIcon = props => <Icon tag="fa-caret-up" {...props}/>;
export const RefreshIcon = props => <Icon tag="fa-refresh" {...props}/>;
export const CheckIcon = props => <Icon tag="fa-check" {...props}/>;
export const ExclamationCircleIcon = props => <Icon tag="fa-exclamation-circle" {...props}/>;
export const PlusIcon = props => <Icon tag="fa-plus" {...props}/>;
export const PlusCircleIcon = props => <Icon tag="fa-plus-circle" {...props}/>;
export const UserPlusIcon = props => <Icon tag="fa-user-plus" {...props}/>;
export const AsteriskIcon = props => <Icon tag="fa-asterisk" {...props}/>;
export const ShoppingBasketIcon = props => <Icon tag="fa-shopping-basket" {...props}/>;
export const ArrowLeftIcon = props => <Icon tag="fa-arrow-left" {...props}/>;
export const SignOutIcon = props => <Icon tag="fa-sign-out-alt" {...props}/>;
export const EyeIcon = props => <Icon tag="fa-eye" {...props}/>;
export const RegularEyeIcon = props => <IconFar tag="fa-eye" {...props}/>;
export const EnvelopeIcon = props => <Icon tag="fa-envelope" {...props}/>;
export const LockIcon = props => <Icon tag="fa-lock" {...props}/>;
export const FacebookIcon = props => <IconFab tag="fa-facebook" {...props}/>;
export const InstagramIcon = props => <IconFab tag="fa-instagram" {...props}/>;
export const GoogleIcon = props => <IconFab tag="fa-google" {...props}/>;
export const RoadIcon = props => <Icon tag="fa-road" {...props}/>;
export const HandHoldingIcon = props => <Icon tag="fa-hand-holding-usd" {...props}/>;
export const ClockIcon = props => <IconFar tag="fa-clock" {...props}/>;
export const MegaPhoneIcon = props => <Icon tag="fa-bullhorn" {...props}/>;
export const UndoIcon = props => <Icon tag="fa-undo-alt" {...props}/>;
export const CalendarAltIcon = props => <Icon tag="fa-calendar-alt" {...props}/>;
export const ProjectDiagramIcon = props => <Icon tag="fa-project-diagram" {...props}/>;
export const FootsIcon = props => <Icon tag="fa-shoe-prints" {...props}/>;
export const TargetIcon = props => <Icon tag="fa-bullseye" {...props}/>;
export const BalanceIcon = props => <Icon tag="fa-balance-scale" {...props}/>;
export const HammerIcon = props => <Icon tag="fa-hammer" {...props}/>;
export const QuestionCircleIcon = props => <IconFar tag="fa-question-circle" {...props}/>;
export const TrophyIcon = props => <Icon tag="fa-trophy" {...props}/>;
export const AwardIcon = props => <Icon tag="fa-award" {...props}/>;
export const HandsShakeIcon = props => <Icon tag="fa-handshake" {...props}/>;
export const CommentsIcon = props => <Icon tag="fa-comments" {...props}/>;
export const CommentIcon = props => <Icon tag="fa-comment" {...props}/>;
export const ThumbsUpIcon = props => <Icon tag="fa-thumbs-up" {...props}/>;
export const HeartIcon = props => <IconFar tag="fa-heart" {...props}/>;
export const ClipboardListIcon = props => <Icon tag="fa-clipboard-list" {...props}/>;
export const AlignCenterIcon = props => <Icon tag="fa-align-center" {...props}/>;
export const PhoneIcon = props => <Icon tag="fa-phone" {...props}/>;
export const MailIcon = props => <Icon tag="fa-mail" {...props}/>;
export const MapMarkedIcon = props => <Icon tag="fa-map-marked" {...props}/>;
export const VideoIcon = props => <Icon tag="fa-video" {...props}/>;
export const MousePointerIcon = props => <Icon tag="fa-mouse-pointer" {...props}/>;
export const FileIcon = props => <IconFar tag="fa-file" {...props}/>;
export const FilePDFIcon = props => <IconFar tag="fa-file-pdf" {...props}/>;
export const FileCSVIcon = props => <IconFar tag="fa-file-csv" {...props}/>;
export const CameraIcon = props => <Icon tag="fa-camera" {...props}/>;
export const HashtagIcon = props => <Icon tag="fa-hashtag" {...props}/>;
export const GlobeIcon = props => <Icon tag="fa-globe" {...props}/>;
export const FileImageIcon = props => <Icon tag="fa-file-image" {...props}/>;
export const UserCircleIcon = props => <IconFar tag="fa-user-circle" {...props}/>;
export const ThumbtackIcon = props => <Icon tag="fa-thumbtack" {...props}/>;
export const SmileIcon = props => <Icon tag="fa-smile" {...props}/>;
export const TimesIcon = props => <Icon tag="fa-times" {...props}/>;
export const WalkingIcon = props => <Icon tag="fa-walking" {...props}/>;
export const DoorOpenIcon = props => <Icon tag="fa-door-open" {...props}/>;
export const ChildIcon = props => <Icon tag="fa-child" {...props}/>;
export const BranchHistoryIcon = props => <Icon tag="fa-code-branch" {...props}/>;
export const SmileVeryHappyIcon = props => <IconFar tag="fa-grin-beam" {...props}/>;
export const SadSmileIcon = props => <IconFar tag="fa-frown" {...props}/>;
export const SmileNoExpreesionIcon = props => <IconFar tag="fa-meh" {...props}/>;
export const SquereIcon = props => <IconFar tag="fa-square" {...props}/>;
export const SquereCheckedIcon = props => <IconFar tag="fa-check-square" {...props}/>;
export const LongArrowAltRightIcon = props => <Icon tag="fa-long-arrow-alt-right" {...props}/>;
export const LongArrowAltLeftIcon = props => <Icon tag="fa-long-arrow-alt-left" {...props}/>;
export const TemperatureHighIcon = props => <Icon tag="fa-temperature-high" {...props}/>;
export const TemperatureLowIcon = props => <Icon tag="fa-temperature-low" {...props}/>;
export const SnowflakeIcon = props => <Icon tag="fa-snowflake" {...props}/>;
export const FireIcon = props => <Icon tag="fa-fire" {...props}/>;
export const TintIcon = props => <Icon tag="fa-tint" {...props}/>;
export const MinusIcon = props => <Icon tag="fa-minus" {...props}/>;
export const TintSlashIcon = props => <Icon tag="fa-tint-slash" {...props}/>;
export const CalculatorIcon = props => <Icon tag="fa-calculator" {...props}/>;
export const AngleDown = props => <Icon tag="fa-angle-down" {...props}/>;
export const MicroChipIcon = props => <Icon tag="fa-microchip" {...props}/>;
export const WhatsAppIcon = props => <IconFab tag="fa-whatsapp" {...props} />;
export const SMSIcon = props => <Icon tag="fa-sms" {...props} />
export const TrashIcon = props => <IconFar tag="fa-trash-alt" {...props} />
export const BellIcon = props => <Icon tag="fa-bell" {...props} />
export const NotificationIcon = props => <Icon tag="fa-bell" {...props} />
export const ChartBarIcon = props => <Icon tag="fa-chart-bar" {...props}/>;
export const HandHoldingUsdIcon = props => <Icon tag="fa-hand-holding-usd" {...props}/>;
export const SalesIcon = props => <Icon tag="fa-hand-holding-usd" {...props}/>;
export const CopyIcon = props => <Icon tag="fa-copy" {...props}/>;
export const BarsIcon = props => <Icon tag="fa-bars" {...props}/>;
export const MapMarkerAltIcon = props => <Icon tag="fa-map-marker-alt" {...props}/>;
export const RobotIcon = props => <Icon tag="fa-robot" {...props}/>;
export const DownloadIcon = props => <Icon tag="fa-download" {...props}/>;
export const ExcelFileIcon = props => <Icon tag="fa-file-excel" {...props}/>;
export const CashRegisterIcon = props => <Icon tag="fa-cash-register" {...props}/>;
export const UserFriendIcon = props =>  <Icon tag="fa-user-friends" {...props}/>;
export const UserClockIcon = props =>  <Icon tag="fa-user-clock" {...props}/>;
export const HddIcon = props =>  <Icon tag="fa-hdd" {...props}/>;
export const EthernetIcon = props => <Icon tag="fas fa-ethernet" {...props} />;
export const DesktopIcon = props => <Icon tag="fas fa-desktop" {...props} />;
export const SyncAltIcon = props => <Icon tag="fas fa-sync-alt" {...props} />;
export const PerfomanceAltIcon = props => <Icon tag="fas fa-tachometer-alt" {...props} />;
export const ExchangeAltIcon = props => <Icon tag="fas fa-exchange-alt" {...props} />;
export const DraggableIcon = props => <Icon tag="fas fa-grip-vertical" {...props} />;
export const CircleIcon = props => <Icon tag="fas fa-circle" {...props}/>;
export const ExclamationTriangleIcon = props => <Icon tag="fa-exclamation-triangle" {...props}/>;
export const PlayCircle = props => <Icon tag="fas fa-play-circle" {...props}/>
export const IdBadgeIcon = props => <Icon tag="fas fa-id-badge" {...props}/>