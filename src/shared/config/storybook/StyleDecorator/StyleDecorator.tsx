import React, { useEffect } from "react";

import { StoryFn } from "@storybook/react";
import { useTheme } from "app/providers/ThemeProvider";
import "app/styles/_index.scss";
import { classNames } from "shared/lib/classNames/classNames";


export const StyleDecorator = (Story : StoryFn) => {
  const { theme } = useTheme();

  useEffect(() => {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(theme);
  }, [theme]);

  return (
      <div className={classNames('storybook-app', {}, [theme])}>
          <Story />
      </div>
  );
};