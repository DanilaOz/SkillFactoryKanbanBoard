import styles from "./UserMenu.module.css";

const UserMenu = (props) => {
  const { setUserMenuVisible } = props;

  const handleCloseUserMenu = () => {
    setUserMenuVisible(false);
  };

  return (
    <div className={styles.menu}>
      <ul className={styles.menuSelect} onClick={handleCloseUserMenu}>
        <li className={styles.menuSelect__item}>
          <a href="" className={styles.menuSelect__link}>
            Profile
          </a>
        </li>
        <li className={styles.menuSelect__item}>
          <a href="" className={styles.menuSelect__link}>
            Log Out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
