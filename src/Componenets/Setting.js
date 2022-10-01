import "./Setting.css";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { settingActions } from "../store/setting-slice";
import { useEffect } from "react";
const Setting = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.setting.isDarkMode);
  const activeLimitedComments = useSelector(
    (state) => state.setting.activeLimitedComments
  );
  const limitedCommentsCount = useSelector(
    (state) => state.setting.limitedCommentsCount
  );
  const limitedLikesCount = useSelector(
    (state) => state.setting.limitedLikesCount
  );
  const activeLimitedLikes = useSelector(
    (state) => state.setting.activeLimitedLikes
  );
  const onChangeThemeHandler = () => {
    dispatch(settingActions.toggleTheme());
  };
  const onChangeComments = () => {
    dispatch(settingActions.toggleActiveLimitedComments());
  };
  const onChangeLikes = () => {
    dispatch(settingActions.toggleActiveLimitedLikes());
  };
  const onChangeLimitedCommentsCount = (e) => {
    dispatch(settingActions.setLimitedCommentsCount(e));
  };
  const onChangeLimitedLikesCount = (e) => {
    dispatch(settingActions.setLimitedLikesCount(e));
  };
  const onClickLimitedComments = () => {
    dispatch(settingActions.toggleIsLimitedComments());
  };
  const onClickLimitedLikes = () => {
    dispatch(settingActions.toggleIsLimitedLikes());
  };

  useEffect(() => {
    console.log(isDarkMode);
  }, [isDarkMode]);
  return (
    <div className="setting-container">
      <div className="setting-header">
        <div className="setting-head-icon-div">
          <Icon
            icon="eva:settings-fill"
            width="4rem"
            color="#fff"
            className="setting-head-icon"
          />
        </div>
        <div className="setting-head-div">
          <h2 className={`setting-head ${isDarkMode && ["dark"]}`}>Setting</h2>
        </div>
      </div>
      <div className="setting-body">
        <div className="theme-setting-div" onChange={onChangeThemeHandler}>
          <div className={`theme-setting-div-title ${isDarkMode && ["dark"]}`}>
            <h3>Theme: </h3>
          </div>
          <div className={`theme-setting-div-light ${isDarkMode && ["dark"]}`}>
            <input
              type="radio"
              value={false}
              name="theme"
              checked={isDarkMode === false}
            />
            <h3>Light</h3>
          </div>
          <div className={`theme-setting-div-dark ${isDarkMode && ["dark"]}`}>
            <input
              type="radio"
              value={true}
              name="theme"
              checked={isDarkMode === true}
            />
            <h3>Dark</h3>
          </div>
        </div>
        <div className="commentCount-setting-div">
          <div
            className="commentCount-setting-div-up"
            onChange={onChangeComments}
          >
            <div
              className={`commentCount-setting-div-title ${
                isDarkMode && ["dark"]
              }`}
            >
              <h3>Comments:</h3>
            </div>
            <div
              className={`commentCount-setting-div-limited ${
                isDarkMode && ["dark"]
              }`}
            >
              <input
                type="radio"
                value={false}
                name="commentCount"
                checked={activeLimitedComments === true}
              />
              <h3>Limit</h3>
            </div>
            <div
              className={`commentCount-setting-div-unlimited ${
                isDarkMode && ["dark"]
              }`}
            >
              <input
                type="radio"
                value={true}
                name="commentCount"
                checked={activeLimitedComments === false}
              />
              <h3>Unlimit</h3>
            </div>
          </div>
          <div className="commentCount-setting-div-down">
            <input
              type="number"
              value={limitedCommentsCount}
              onChange={(e) => {
                onChangeLimitedCommentsCount(e.target.value);
              }}
              className={` ${isDarkMode && ["dark"]}`}
            />
            <button onClick={onClickLimitedComments}>Limit</button>
            {!activeLimitedComments && (
              <div
                className={`off-commentCount ${isDarkMode && ["dark"]}`}
              ></div>
            )}
          </div>
        </div>
        <div className="commentCount-setting-div">
          <div className="commentCount-setting-div-up" onChange={onChangeLikes}>
            <div
              className={`commentCount-setting-div-title ${
                isDarkMode && ["dark"]
              }`}
            >
              <h3>Likes:</h3>
            </div>
            <div
              className={`commentCount-setting-div-limited ${
                isDarkMode && ["dark"]
              }`}
            >
              <input
                type="radio"
                value={false}
                name="likeCount"
                checked={activeLimitedLikes === true}
              />
              <h3>Limit</h3>
            </div>
            <div
              className={`commentCount-setting-div-unlimited ${
                isDarkMode && ["dark"]
              }`}
            >
              <input
                type="radio"
                value={true}
                name="likeCount"
                checked={activeLimitedLikes === false}
              />
              <h3>Unlimit</h3>
            </div>
          </div>
          <div
            className={`commentCount-setting-div-down ${
              isDarkMode && ["dark"]
            }`}
          >
            <input
              type="number"
              value={limitedLikesCount}
              onChange={(e) => {
                onChangeLimitedLikesCount(e.target.value);
              }}
              className={` ${isDarkMode && ["dark"]}`}
            />
            <button onClick={onClickLimitedLikes}>Limit</button>
            {!activeLimitedLikes && (
              <div className={`off-likeCount ${isDarkMode && ["dark"]}`}></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Setting;
