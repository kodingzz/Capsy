import { NavLink } from "react-router-dom";
import footerLogo from '../assets/footer-logo.svg'

interface NavItemProps {
  to: string;
  iconPath: string;
  label: string;
}

export default function Footer() {
  const NavItem = ({ to, iconPath, label }: NavItemProps) => (
    <li className="flex flex-col items-center">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "no-underline text-secondary flex flex-col items-center"
            : "no-underline text-white flex flex-col items-center"
        }
      >
        {({ isActive }) => (
          <>
            <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill={isActive ? "#7CF335" : "white"} d={iconPath} />
            </svg>
            <span className="mt-1 text-sm">{label}</span>
          </>
        )}
      </NavLink>
    </li>
  );

  return (
    <footer className="absolute bottom-0 flex items-center w-full px-8 py-2 bg-black">
      <nav className="w-full">
        <ul className="text-white item-around">
          <NavItem
            to="/"
            iconPath="M8.125 12.3749H11.875V6.73618L7.5 3.33368L3.125 6.73618V12.3749H6.875V8.62493H8.125V12.3749ZM13.125 12.9999C13.125 13.1657 13.0592 13.3247 12.9419 13.4419C12.8247 13.5591 12.6658 13.6249 12.5 13.6249H2.5C2.33424 13.6249 2.17527 13.5591 2.05806 13.4419C1.94085 13.3247 1.875 13.1657 1.875 12.9999V6.43118C1.87493 6.33593 1.89664 6.24194 1.93845 6.15636C1.98026 6.07079 2.04108 5.9959 2.11625 5.93743L7.11625 2.04868C7.22596 1.96333 7.361 1.91699 7.5 1.91699C7.639 1.91699 7.77404 1.96333 7.88375 2.04868L12.8837 5.93743C12.9589 5.9959 13.0197 6.07079 13.0616 6.15636C13.1034 6.24194 13.1251 6.33593 13.125 6.43118V12.9999Z"
            label="캡시 홈"
          />
          <NavItem
            to="/editor"
            iconPath="M10.33 6.05356L9.44625 5.16981L3.625 10.9911V11.8748H4.50875L10.33 6.05356ZM11.2137 5.16981L12.0975 4.28606L11.2137 3.40231L10.33 4.28606L11.2137 5.16981ZM5.02625 13.1248H2.375V10.4729L10.7719 2.07606C10.8891 1.95889 11.048 1.89307 11.2137 1.89307C11.3795 1.89307 11.5384 1.95889 11.6556 2.07606L13.4237 3.84418C13.5409 3.96139 13.6067 4.12033 13.6067 4.28606C13.6067 4.45179 13.5409 4.61073 13.4237 4.72793L5.02688 13.1248H5.02625Z"
            label="작성"
          />
          <li className="flex flex-col items-center">
            <img src={footerLogo} alt="Logo" className="h-10 w-25" />
          </li>
          <NavItem
            to="/event"
            iconPath="M13.625 4.375H11.6662C12.0994 3.98005 12.4427 3.49663 12.6728 2.95748C12.9029 2.41833 13.0145 1.83603 13 1.25H11.75C11.75 3.05063 10.5181 3.94188 9.155 4.25C9.5643 3.51987 9.80997 2.70949 9.875 1.875C9.875 1.37772 9.67746 0.900805 9.32583 0.549175C8.97419 0.197544 8.49728 0 8 0C7.50272 0 7.02581 0.197544 6.67417 0.549175C6.32254 0.900805 6.125 1.37772 6.125 1.875C6.19003 2.70949 6.4357 3.51987 6.845 4.25C5.48188 3.94188 4.25 3.05063 4.25 1.25H3C2.9855 1.83603 3.09708 2.41833 3.32719 2.95748C3.5573 3.49663 3.90056 3.98005 4.33375 4.375H2.375C1.87772 4.375 1.40081 4.57254 1.04917 4.92417C0.697544 5.27581 0.5 5.75272 0.5 6.25L0.5 8.75H1.75V15H14.25V8.75H15.5V6.25C15.5 5.75272 15.3025 5.27581 14.9508 4.92417C14.5992 4.57254 14.1223 4.375 13.625 4.375ZM8 1.25C8.16576 1.25 8.32473 1.31585 8.44194 1.43306C8.55915 1.55027 8.625 1.70924 8.625 1.875C8.54955 2.53927 8.33671 3.18057 8 3.75813C7.66329 3.18057 7.45045 2.53927 7.375 1.875C7.375 1.70924 7.44085 1.55027 7.55806 1.43306C7.67527 1.31585 7.83424 1.25 8 1.25ZM1.75 6.25C1.75 6.08424 1.81585 5.92527 1.93306 5.80806C2.05027 5.69085 2.20924 5.625 2.375 5.625H7.375V7.5H1.75V6.25ZM3 8.75H7.375V13.75H3V8.75ZM13 13.75H8.625V8.75H13V13.75ZM14.25 7.5H8.625V5.625H13.625C13.7908 5.625 13.9497 5.69085 14.0669 5.80806C14.1842 5.92527 14.25 6.08424 14.25 6.25V7.5Z"
            label="이벤트"
          />
          <NavItem
            to="/mypage"
            iconPath="M7.5 0C5.567 0 4 1.567 4 3.5C4 5.433 5.567 7 7.5 7C9.433 7 11 5.433 11 3.5C11 1.567 9.433 0 7.5 0ZM7.5 1C8.88 1 10 2.12 10 3.5C10 4.88 8.88 6 7.5 6C6.12 6 5 4.88 5 3.5C5 2.12 6.12 1 7.5 1ZM7.5 8C4.467 8 2 10.467 2 13.5V14H13V13.5C13 10.467 10.533 8 7.5 8ZM7.5 9C9.981 9 12 11.019 12 13.5V13H3V13.5C3 11.019 5.019 9 7.5 9Z"
            label="마이"
          />
        </ul>
      </nav>
    </footer>
  );
}