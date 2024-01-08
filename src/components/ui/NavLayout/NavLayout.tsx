import MobileSettings from '../Settings/MobileSettings';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

function NavLayout() {
  return (
    <>
      <MobileNavigation />
      <DesktopNavigation />
      <MobileSettings />
    </>
  );
}

export default NavLayout;
