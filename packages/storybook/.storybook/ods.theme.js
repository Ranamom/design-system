import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  // Brand
  brandTitle: 'OVHcloud Design System',
  brandUrl: '/?path=/story/ovhcloud-design-system-welcome--page',
  brandImage: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIg0KICAgICAgICBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIg0KICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIg0KICAgICB2aWV3Qm94PSIwIDAgMzYxLjc5IDEyNy4zOCINCiAgICAgZmlsbD0iIzAwMEU5QyINCiAgICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQogICAgPHBhdGggZD0iTTEwNSwyLjY5YTQwLjEsNDAuMSwwLDAsMS0zLjc0LDQ0LjQ5SDc5Ljg0bDYuNi0xMS42N0g3Ny43MUw4OCwxNy4zNmg4Ljc4Wk02Mi42OCw0Ny4xOEg0MC44MkEzOS41OSwzOS41OSwwLDAsMSwzNywyLjU5TDUxLjIxLDI3LjIyLDY2Ljg0LDBoMjNMNjIuNjksNDcuMTZoMFoiLz4NCiAgICA8cGF0aCBkPSJNMTIzLjA5LDI0LjI4YzAtMTIuNTksNi4yNy0xOC42NCwxNi41Ny0xOC42NHMxNi41Niw2LjA1LDE2LjU2LDE4LjY0LTYuMzEsMTguNi0xNi41NiwxOC42UzEyMy4wOSwzNi43NSwxMjMuMDksMjQuMjhabTMuNzIsMGMwLDEwLjM1LDQuNzIsMTUuMjgsMTIuODUsMTUuMjhzMTIuODQtNC45MywxMi44NC0xNS4yOFMxNDcuNzgsOC45MywxMzkuNjYsOC45MywxMjYuODEsMTMuODgsMTI2LjgxLDI0LjI4WiIvPg0KICAgIDxwYXRoIGQ9Ik0xODMuMjksNy4xM0ExLjgzLDEuODMsMCwwLDEsMTg1LDZhMS44MSwxLjgxLDAsMCwxLDEuMjguNTMsMS43NiwxLjc2LDAsMCwxLC41MiwxLjI4LDIuMzcsMi4zNywwLDAsMS0uMTYuNzlMMTc0LjIxLDQxLjMxYTEuNzgsMS43OCwwLDAsMS0xLjcsMS4yNCwxLjc2LDEuNzYsMCwwLDEtMS42OS0xLjI0TDE1OC40LDguNTZhMi4zNywyLjM3LDAsMCwxLS4xNi0uNzksMS43NiwxLjc2LDAsMCwxLC41Mi0xLjI4QTEuODEsMS44MSwwLDAsMSwxNjAsNmExLjgzLDEuODMsMCwwLDEsMS43LDEuMTdsMTAuNzcsMjguNTZaIi8+DQogICAgPHBhdGggZD0iTTE5NC4zNCwyNS40NFY0MC43M2ExLjgsMS44LDAsMCwxLS44NiwxLjY4LDEuODMsMS44MywwLDAsMS0xLjg5LDAsMS44LDEuOCwwLDAsMS0uODYtMS42OHYtMzNhMS44LDEuOCwwLDAsMSwuODYtMS42OCwxLjgzLDEuODMsMCwwLDEsMS44OSwwLDEuOCwxLjgsMCwwLDEsLjg2LDEuNjhWMjIuMTVoMTguNDhWNy43N2ExLjgsMS44LDAsMCwxLC44Ni0xLjY4LDEuODMsMS44MywwLDAsMSwxLjg5LDAsMS44LDEuOCwwLDAsMSwuODYsMS42OHYzM2ExLjgsMS44LDAsMCwxLS44NiwxLjY4LDEuODMsMS44MywwLDAsMS0xLjg5LDAsMS44LDEuOCwwLDAsMS0uODYtMS42OFYyNS40NFoiLz4NCiAgICA8cGF0aCBkPSJNMjMzLjQ2LDE3LjI3YTEwLDEwLDAsMCwxLDguMTcsMy42NiwxLjUzLDEuNTMsMCwwLDEsLjM3LDEsMS41LDEuNSwwLDAsMS0xLjU0LDEuNTQsMS41NiwxLjU2LDAsMCwxLTEuMjctLjY0LDYuNzksNi43OSwwLDAsMC01LjczLTIuNDljLTQuODksMC03LjQ5LDMuMTMtNy40OSw5LjY2czIuNiw5LjcxLDcuNDksOS43MWE5LjY5LDkuNjksMCwwLDAsNi4xNS0yLjI4LDEuNTQsMS41NCwwLDAsMSwyLjU0LDEuMTcsMS42MSwxLjYxLDAsMCwxLS42OSwxLjMyLDEyLDEyLDAsMCwxLTgsMi44N2MtNi44NSwwLTEwLjk0LTQuMDktMTAuOTQtMTIuNzlTMjI2LjYxLDE3LjI3LDIzMy40NiwxNy4yN1oiLz4NCiAgICA8cGF0aCBkPSJNMjUwLjQsNlYzNi4zM2MwLDIuMTIuNjksMywyLjEyLDNhMS42LDEuNiwwLDAsMSwxLjQ5Ljc2LDEuNjIsMS42MiwwLDAsMSwwLDEuNjcsMS42LDEuNiwwLDAsMS0xLjQ5Ljc2Yy0zLjU1LDAtNS41Mi0yLjEzLTUuNTItNi4yMVY2YTEuNzQsMS43NCwwLDAsMSwxLjctMS42OUExLjcsMS43LDAsMCwxLDI1MC40LDZaIi8+DQogICAgPHBhdGggZD0iTTI3OS4zMiwzMGMwLDguNy00LjI1LDEyLjc5LTExLjE1LDEyLjc5UzI1NywzOC43MSwyNTcsMzBzNC4zLTEyLjc0LDExLjE0LTEyLjc0UzI3OS4zMiwyMS4zLDI3OS4zMiwzMFptLTMuNDUsMGMwLTYuNjktMi44MS05LjY2LTcuNy05LjY2cy03LjY5LDMtNy42OSw5LjY2LDIuODEsOS43MSw3LjY5LDkuNzEsNy43NC0yLjkyLDcuNzQtOS43MVoiLz4NCiAgICA8cGF0aCBkPSJNMjg3LjUxLDE5LjI5VjMzLjE0YzAsMy40NSwxLjExLDYuNDIsNi40Nyw2LjQyczYuNDgtMyw2LjQ4LTYuNDJWMTkuMjlhMS43MiwxLjcyLDAsMCwxLC41Mi0xLjIxLDEuNzYsMS43NiwwLDAsMSwxLjIzLS40OSwxLjcsMS43LDAsMCwxLDEuMTguNTEsMS42NiwxLjY2LDAsMCwxLC40NywxLjE5VjMzLjE0YzAsNS0xLjY1LDkuNjYtOS44OCw5LjY2cy05Ljg3LTQuNjItOS44Ny05LjY2VjE5LjI5YTEuNjcsMS42NywwLDAsMSwxLjctMS43QTEuNywxLjcsMCwwLDEsMjg3LjUxLDE5LjI5WiIvPg0KICAgIDxwYXRoIGQ9Ik0zMjYuNTEsMjAuNzJWNmExLjcsMS43LDAsMCwxLDMuNCwwVjMyLjM0YzAsNy00LjM1LDEwLjQ2LTEwLjQsMTAuNDYtNi44NSwwLTEwLjg5LTQuMDktMTAuODktMTIuNzlzMy44My0xMi43NCwxMC42Ny0xMi43NEE5LDksMCwwLDEsMzI2LjUxLDIwLjcyWm0wLDQuM3MtMi00LjY3LTctNC42N1MzMTIsMjMuNDgsMzEyLDMwczIuNiw5LjcxLDcuNDksOS43MWM0LjA4LDAsNy0yLjMzLDctNy4zOFoiLz4NCiAgICA8Zz4NCiAgICAgICAgPHBhdGggZD0iTTAsNzZIMTAuMzNxOC44NSwwLDEzLjgxLDQuNzh0NSwxNC4zNGEyNS42MSwyNS42MSwwLDAsMS0xLjI3LDguNDQsMTYuMjIsMTYuMjIsMCwwLDEtMy42Niw2LjExLDE1LjM0LDE1LjM0LDAsMCwxLTUuNzgsMy42OSwyMi4yNSwyMi4yNSwwLDAsMS03LjcsMS4yNEgwVjc2Wm05Ljg1LDMzcTUuOSwwLDkuMDYtMy4zOXQzLjE2LTEwLjUzcTAtNy4wOC0zLjE5LTEwLjMzYy0yLjEzLTIuMTctNS4xMy0zLjI1LTktMy4yNWgtM1YxMDloM1oiLz4NCiAgICAgICAgPHBhdGggZD0iTTM0LjQsMTAwLjE0YTE3LjEzLDE3LjEzLDAsMCwxLDEuMTItNi4zNywxNC42NSwxNC42NSwwLDAsMSwzLTQuNzgsMTMuMTUsMTMuMTUsMCwwLDEsNC4yOC0zLDEyLjE2LDEyLjE2LDAsMCwxLDUtMS4wNiwxMi41NSwxMi41NSwwLDAsMSw1LjE5LDEsMTAuMjQsMTAuMjQsMCwwLDEsMy43NSwyLjgzQTEyLjQzLDEyLjQzLDAsMCwxLDU5LDkzLjEyYTE5LjE0LDE5LjE0LDAsMCwxLC43Nyw1LjU1LDE0LjEzLDE0LjEzLDAsMCwxLS4yOSwzLjE5SDQxYTkuNTUsOS41NSwwLDAsMCwyLjc0LDYuMDgsOC4xNCw4LjE0LDAsMCwwLDUuODEsMi4xMiwxMC43NiwxMC43NiwwLDAsMCwzLjUxLS41NiwxNS42LDE1LjYsMCwwLDAsMy4yMi0xLjU2bDIuMyw0LjI1YTIwLjY4LDIwLjY4LDAsMCwxLTQuNiwyLjI0LDE2LDE2LDAsMCwxLTUuMzEuODgsMTUsMTUsMCwwLDEtNS42MS0xLDEzLjMyLDEzLjMyLDAsMCwxLTQuNTQtMywxMy42MSwxMy42MSwwLDAsMS0zLTQuNzVBMTcuNDEsMTcuNDEsMCwwLDEsMzQuNCwxMDAuMTRabTE5LjQxLTIuNmE4LjkyLDguOTIsMCwwLDAtMS40NS01LjQzLDUuMTgsNS4xOCwwLDAsMC00LjQ1LTJBNi4zNSw2LjM1LDAsMCwwLDQzLjM3LDkyLDguOTIsOC45MiwwLDAsMCw0MSw5Ny41NFoiLz4NCiAgICAgICAgPHBhdGggZD0iTTY2LjQ5LDEwNi45MmExOC43NiwxOC43NiwwLDAsMCwzLjg2LDIuMzksMTAuMDksMTAuMDksMCwwLDAsNC4xNi44Niw1LjIyLDUuMjIsMCwwLDAsMy40OC0xLDMuMTYsMy4xNiwwLDAsMCwxLjEyLTIuNTEsMi40NywyLjQ3LDAsMCwwLS41My0xLjU2LDUsNSwwLDAsMC0xLjQyLTEuMjEsMTMuNDQsMTMuNDQsMCwwLDAtMi0xYy0uNzUtLjI5LTEuNS0uNi0yLjI0LS45Mi0uOTQtLjM1LTEuOTEtLjc3LTIuODktMS4yNGExMS42OCwxMS42OCwwLDAsMS0yLjYzLTEuNzEsOC42NCw4LjY0LDAsMCwxLTEuODktMi4zMyw2LjQyLDYuNDIsMCwwLDEtLjc0LTMuMTYsNy44Miw3LjgyLDAsMCwxLDIuODMtNi4yNSwxMS41MiwxMS41MiwwLDAsMSw3LjczLTIuNDJBMTMuMzUsMTMuMzUsMCwwLDEsODAuNzUsODZhMjAuMTQsMjAuMTQsMCwwLDEsNC4xOSwyLjQybC0zLjEzLDQuMTNhMTUuOTMsMTUuOTMsMCwwLDAtMy4xLTEuOCw4LjE1LDguMTUsMCwwLDAtMy4yNy0uNjgsNC43Niw0Ljc2LDAsMCwwLTMuMjIuOTEsMi45MSwyLjkxLDAsMCwwLTEsMi4yNywyLjMyLDIuMzIsMCwwLDAsLjUsMS41QTQuNTgsNC41OCwwLDAsMCw3Myw5NS44MmExMi4zNCwxMi4zNCwwLDAsMCwxLjkyLjg4Yy43My4yOCwxLjQ4LjU1LDIuMjcuODMsMSwuMzUsMiwuNzYsMywxLjIxYTExLjg4LDExLjg4LDAsMCwxLDIuNjgsMS42OCw3LjY2LDcuNjYsMCwwLDEsMiwyLjQ1LDcuNTQsNy41NCwwLDAsMSwuNzQsMy40NSw4LjQsOC40LDAsMCwxLS43NCwzLjUxLDguMDgsOC4wOCwwLDAsMS0yLjE1LDIuODMsMTAuMzIsMTAuMzIsMCwwLDEtMy41NCwxLjkyLDE1LjM1LDE1LjM1LDAsMCwxLTQuODQuNzEsMTYsMTYsMCwwLDEtNS45My0xLjE1LDE5LjExLDE5LjExLDAsMCwxLTUtMi44NloiLz4NCiAgICAgICAgPHBhdGggZD0iTTk1LjA1LDgwLjU1YTQuMzIsNC4zMiwwLDAsMS0zLTEuMDYsMy41NCwzLjU0LDAsMCwxLTEuMTgtMi43N0EzLjYzLDMuNjMsMCwwLDEsOTIsNzMuOTJhNC43LDQuNywwLDAsMSw2LDAsMy42MywzLjYzLDAsMCwxLDEuMTgsMi44LDMuNTQsMy41NCwwLDAsMS0xLjE4LDIuNzdBNC4zMiw0LjMyLDAsMCwxLDk1LjA1LDgwLjU1Wm0tMy40Miw1LjA3aDYuNzl2MjlIOTEuNjNaIi8+DQogICAgICAgIDxwYXRoIGQ9Ik0xMDUuMTQsMTE5Ljg0YTUuODksNS44OSwwLDAsMSwxLjA2LTMuMzksOS44OCw5Ljg4LDAsMCwxLDMuMDctMi44di0uMjRhNS44LDUuOCwwLDAsMS0xLjg2LTEuODksNS40OSw1LjQ5LDAsMCwxLS43NC0zLDUuMjgsNS4yOCwwLDAsMSwxLTMuMSw5LjU2LDkuNTYsMCwwLDEsMi4yMS0yLjI3VjEwM2ExMC4zMiwxMC4zMiwwLDAsMS0yLjYyLTMuMSw4Ljg5LDguODksMCwwLDEtMS4xNS00LjU3LDEwLDEwLDAsMCwxLC45NC00LjQyLDkuNzMsOS43MywwLDAsMSwyLjUxLTMuMjcsMTAuNzEsMTAuNzEsMCwwLDEsMy42My0yLDEzLjY5LDEzLjY5LDAsMCwxLDQuMzctLjY4LDEyLDEyLDAsMCwxLDIuMjcuMjEsMTYuNzgsMTYuNzgsMCwwLDEsMiwuNWgxMC4zOHY1aC01LjMxQTcuMDYsNy4wNiwwLDAsMSwxMjgsOTIuNzJhOC4xLDguMSwwLDAsMSwuNDcsMi44LDEwLDEwLDAsMCwxLS44Niw0LjI1LDguOTEsOC45MSwwLDAsMS0yLjMzLDMuMDcsMTAuMDgsMTAuMDgsMCwwLDEtMy40OCwxLjg5LDE0LDE0LDAsMCwxLTQuMzEuNjUsMTEuMDUsMTEuMDUsMCwwLDEtMi0uMTgsOS41NSw5LjU1LDAsMCwxLTItLjU5LDYsNiwwLDAsMC0xLDEuMTgsMi44NCwyLjg0LDAsMCwwLS4zOCwxLjU5LDIuMjMsMi4yMywwLDAsMCwxLDIsNi45NCw2Ljk0LDAsMCwwLDMuNjkuNzFIMTIycTUuMjUsMCw3Ljk0LDEuNjhhNiw2LDAsMCwxLDIuNjgsNS40Niw3Ljg1LDcuODUsMCwwLDEtMS4wOSw0LDkuODQsOS44NCwwLDAsMS0zLjEsMy4yNCwxNi40MSwxNi40MSwwLDAsMS00Ljg3LDIuMTUsMjMuOSwyMy45LDAsMCwxLTYuNC44LDIzLjQzLDIzLjQzLDAsMCwxLTQuODEtLjQ3LDEyLjc2LDEyLjc2LDAsMCwxLTMuODEtMS40Miw3LjUsNy41LDAsMCwxLTIuNTEtMi4zNkE2LDYsMCwwLDEsMTA1LjE0LDExOS44NFptNS42Ni0xYTMuMzYsMy4zNiwwLDAsMCwyLDMsMTEuMzcsMTEuMzcsMCwwLDAsNS40NiwxLjA5LDEwLjMxLDEwLjMxLDAsMCwwLDUuNjktMS4zOSwzLjkyLDMuOTIsMCwwLDAsMi4xNS0zLjI3LDIuMjYsMi4yNiwwLDAsMC0xLjMzLTIuMyw5LjczLDkuNzMsMCwwLDAtMy44MS0uNTloLTRBMTYuMjksMTYuMjksMCwwLDEsMTEzLDExNSw0LjgyLDQuODIsMCwwLDAsMTEwLjgsMTE4Ljg0Wm02LjczLTE3LjdhNC43OCw0Ljc4LDAsMCwwLDMuNTQtMS41LDYsNiwwLDAsMCwxLjQ4LTQuMzQsNS44MSw1LjgxLDAsMCwwLTEuNDUtNC4yMiw0Ljc2LDQuNzYsMCwwLDAtMy41Ny0xLjUsNC45LDQuOSwwLDAsMC0zLjYsMS40Nyw1Ljc2LDUuNzYsMCwwLDAtMS40OCw0LjI1LDUuOTMsNS45MywwLDAsMCwxLjQ4LDQuMzRBNC44NSw0Ljg1LDAsMCwwLDExNy41MywxMDEuMTRaIi8+DQogICAgICAgIDxwYXRoIGQ9Ik0xMzcuNzcsODUuNjJoNS42bC40NywzLjg5aC4yNGEyMy4wNiwyMy4wNiwwLDAsMSw0LjIyLTMuMjUsMTAuMTIsMTAuMTIsMCwwLDEsNS4yOC0xLjM2cTQuNjYsMCw2Ljc5LDNjMS40MiwyLDIuMTIsNC44MywyLjEyLDguNTN2MTguMTdIMTU1LjdWOTcuMjlxMC0zLjYtMS4wNi01LjA3YTQsNCwwLDAsMC0zLjQ4LTEuNDcsNi4wNyw2LjA3LDAsMCwwLTMuMzMuOTEsMjEuNDQsMjEuNDQsMCwwLDAtMy4yOCwyLjY4djIwLjI0aC02Ljc4di0yOVoiLz4NCiAgICAgICAgPHBhdGggZD0iTTE4NC44NSwxMDVhMTcuMzUsMTcuMzUsMCwwLDAsNC43MiwzLjE2LDEyLjY2LDEyLjY2LDAsMCwwLDUuMzEsMS4yMSw3Ljg5LDcuODksMCwwLDAsNS0xLjM2LDQuMzUsNC4zNSwwLDAsMCwxLjcxLTMuNiw0LjI2LDQuMjYsMCwwLDAtLjQ0LTIsNC41OSw0LjU5LDAsMCwwLTEuMjQtMS40NUExMC41MiwxMC41MiwwLDAsMCwxOTgsOTkuNzdjLS43My0uMzUtMS41Mi0uNzEtMi4zOS0xLjA2bC01LjMxLTIuM2ExNy4xOCwxNy4xOCwwLDAsMS0yLjgtMS40OEExMi42NiwxMi42NiwwLDAsMSwxODUsOTIuODFhOS44LDkuOCwwLDAsMS0xLjgtMi44OSw5LjkyLDkuOTIsMCwwLDEtLjY4LTMuNzgsOS41Niw5LjU2LDAsMCwxLDEtNC4yOCwxMC43OSwxMC43OSwwLDAsMSwyLjY4LTMuNDUsMTIuNDgsMTIuNDgsMCwwLDEsNC4xLTIuMywxNS44NywxNS44NywwLDAsMSw1LjIyLS44M0ExNi4zOSwxNi4zOSwwLDAsMSwyMDIsNzYuNjFhMTcsMTcsMCwwLDEsNS4zNywzLjU3bC0zLjQ4LDQuMzdBMTcuNDYsMTcuNDYsMCwwLDAsMjAwLDgyLjEzYTExLDExLDAsMCwwLTQuNDgtLjg4LDcuMzQsNy4zNCwwLDAsMC00LjQzLDEuMjEsMy45MSwzLjkxLDAsMCwwLTEuNjUsMy4zMywzLjU2LDMuNTYsMCwwLDAsLjUsMS45Miw1LjIxLDUuMjEsMCwwLDAsMS4zNiwxLjQyLDEwLjkxLDEwLjkxLDAsMCwwLDIsMS4xMmMuNzUuMzMsMS41MS42NiwyLjMsMWw1LjI1LDIuMThBMTguMTcsMTguMTcsMCwwLDEsMjA0LDk1LjA1YTExLjY5LDExLjY5LDAsMCwxLDIuNDUsMi4xOCw5LjMyLDkuMzIsMCwwLDEsMS42MiwyLjg2LDExLDExLDAsMCwxLC41OSwzLjc1LDEwLjQ2LDEwLjQ2LDAsMCwxLTMuNjgsOCwxMy41NSwxMy41NSwwLDAsMS00LjM3LDIuNDgsMTcuMjQsMTcuMjQsMCwwLDEtNS44MS45MSwxOS44MywxOS44MywwLDAsMS03LjUyLTEuNDcsMTkuNTcsMTkuNTcsMCwwLDEtNi40LTQuMTlaIi8+DQogICAgICAgIDxwYXRoIGQ9Ik0yMTUuNDQsMTIwLjg3YTQuMiw0LjIsMCwwLDAsMS4wOS4xNSw1LDUsMCwwLDAsMy42OS0xLjM5LDguOCw4LjgsMCwwLDAsMi4wOS0zLjU3bC41My0xLjgzTDIxMS40NSw4NS42MWg2LjlsNSwxNC4yMmMuNDMsMS4yNi44NiwyLjU5LDEuMjcsNHMuODMsMi43OCwxLjI3LDQuMTZoLjI0Yy4zNS0xLjM0LjcyLTIuNywxLjA5LTQuMXMuNzQtMi43NCwxLjA5LTRsNC4zNy0xNC4yMmg2LjU1bC0xMC41LDMwLjI3YTMwLjQ5LDMwLjQ5LDAsMCwxLTEuOTUsNC40MiwxNC4yMiwxNC4yMiwwLDAsMS0yLjQ1LDMuMzMsOS42Myw5LjYzLDAsMCwxLTMuMTksMi4xMiwxMSwxMSwwLDAsMS00LjE2Ljc0LDEyLjUzLDEyLjUzLDAsMCwxLTIuMDctLjE1LDEwLjcyLDEwLjcyLDAsMCwxLTEuNzEtLjQ0bDEuMjQtNS4zMUMyMTQuNzQsMTIwLjY5LDIxNS4wNiwxMjAuNzcsMjE1LjQ0LDEyMC44N1oiLz4NCiAgICAgICAgPHBhdGggZD0iTTI0NC41NSwxMDYuOTJhMTguNzYsMTguNzYsMCwwLDAsMy44NiwyLjM5LDEwLjA5LDEwLjA5LDAsMCwwLDQuMTYuODYsNS4yMiw1LjIyLDAsMCwwLDMuNDgtMSwzLjE2LDMuMTYsMCwwLDAsMS4xMi0yLjUxLDIuNDcsMi40NywwLDAsMC0uNTMtMS41Niw1LDUsMCwwLDAtMS40Mi0xLjIxLDEzLjQ0LDEzLjQ0LDAsMCwwLTItMWMtLjc1LS4yOS0xLjUtLjYtMi4yNC0uOTItLjk0LS4zNS0xLjkxLS43Ny0yLjg5LTEuMjRhMTEuMzksMTEuMzksMCwwLDEtMi42Mi0xLjcxLDguNjQsOC42NCwwLDAsMS0xLjg5LTIuMzMsNi40Miw2LjQyLDAsMCwxLS43NC0zLjE2LDcuODIsNy44MiwwLDAsMSwyLjgzLTYuMjUsMTEuNTIsMTEuNTIsMCwwLDEsNy43My0yLjQyQTEzLjM1LDEzLjM1LDAsMCwxLDI1OC44Miw4NiwyMC4xNCwyMC4xNCwwLDAsMSwyNjMsODguNGwtMy4xMyw0LjEzYTE1LjkzLDE1LjkzLDAsMCwwLTMuMS0xLjgsOC4xNyw4LjE3LDAsMCwwLTMuMjgtLjY4LDQuNzIsNC43MiwwLDAsMC0zLjIxLjkxLDIuOTEsMi45MSwwLDAsMC0xLDIuMjcsMi4zMiwyLjMyLDAsMCwwLC41LDEuNSw0LjU4LDQuNTgsMCwwLDAsMS4zMywxLjA5LDEyLjM0LDEyLjM0LDAsMCwwLDEuOTIuODhjLjczLjI4LDEuNDguNTUsMi4yNy44MywxLC4zNSwyLC43NiwzLDEuMjFhMTEuODgsMTEuODgsMCwwLDEsMi42OCwxLjY4LDcuOCw3LjgsMCwwLDEsMS45NSwyLjQ1LDcuNTQsNy41NCwwLDAsMSwuNzQsMy40NSw4LjQsOC40LDAsMCwxLS43NCwzLjUxLDguMDgsOC4wOCwwLDAsMS0yLjE1LDIuODMsMTAuMzIsMTAuMzIsMCwwLDEtMy41NCwxLjkyLDE1LjM1LDE1LjM1LDAsMCwxLTQuODQuNzEsMTYsMTYsMCwwLDEtNS45My0xLjE1LDE5LjExLDE5LjExLDAsMCwxLTUtMi44NloiLz4NCiAgICAgICAgPHBhdGggZD0iTTI3MC42OSw5MWgtNC4xM1Y4NS45Mmw0LjQ4LS4yOS44My03LjkxaDUuNjZ2Ny45MWg3LjM4VjkxaC03LjM4djEzLjgxcTAsNS4wNyw0LjA3LDUuMDdhNy4wNSw3LjA1LDAsMCwwLDEuNTYtLjE4LDcuNDcsNy40NywwLDAsMCwxLjQ1LS40N2wxLjE4LDVhMjIuNjIsMjIuNjIsMCwwLDEtMi42OC43NCwxNSwxNSwwLDAsMS0zLjIyLjMyLDEwLjYzLDEwLjYzLDAsMCwxLTQuMjgtLjc3LDcuMjksNy4yOSwwLDAsMS0yLjgzLTIuMTUsOC44Miw4LjgyLDAsMCwxLTEuNTktMy4zLDE3LjEsMTcuMSwwLDAsMS0uNS00LjI4WiIvPg0KICAgICAgICA8cGF0aCBkPSJNMjg4LjUxLDEwMC4xNGExNy4xMywxNy4xMywwLDAsMSwxLjEyLTYuMzcsMTQuNjUsMTQuNjUsMCwwLDEsMy00Ljc4LDEzLjE1LDEzLjE1LDAsMCwxLDQuMjgtMywxMi4xNiwxMi4xNiwwLDAsMSw1LTEuMDYsMTIuNTUsMTIuNTUsMCwwLDEsNS4xOSwxLDEwLjI0LDEwLjI0LDAsMCwxLDMuNzUsMi44MywxMi40MywxMi40MywwLDAsMSwyLjI3LDQuMzcsMTkuMTQsMTkuMTQsMCwwLDEsLjc3LDUuNTUsMTQuMTMsMTQuMTMsMCwwLDEtLjI5LDMuMTlIMjk1LjEzYTkuNTUsOS41NSwwLDAsMCwyLjc0LDYuMDgsOC4xNCw4LjE0LDAsMCwwLDUuODEsMi4xMiwxMC43NiwxMC43NiwwLDAsMCwzLjUxLS41NiwxNS42LDE1LjYsMCwwLDAsMy4yMi0xLjU2bDIuMyw0LjI1YTIwLjY4LDIwLjY4LDAsMCwxLTQuNiwyLjI0LDE2LDE2LDAsMCwxLTUuMzEuODgsMTUsMTUsMCwwLDEtNS42LTEsMTMuMjIsMTMuMjIsMCwwLDEtNC41NC0zLDEzLjc1LDEzLjc1LDAsMCwxLTMtNC43NUExNy4yLDE3LjIsMCwwLDEsMjg4LjUxLDEwMC4xNFptMTkuNDEtMi42YTguOTIsOC45MiwwLDAsMC0xLjQ1LTUuNDMsNS4xOCw1LjE4LDAsMCwwLTQuNDUtMkE2LjM1LDYuMzUsMCwwLDAsMjk3LjQ4LDkyYTksOSwwLDAsMC0yLjQyLDUuNTJaIi8+DQogICAgICAgIDxwYXRoIGQ9Ik0zMjAuMzEsODUuNjJoNS42MWwuNDcsMy45NWguMjRhMjAuMjQsMjAuMjQsMCwwLDEsNC0zLjMsOSw5LDAsMCwxLDQuODctMS4zNiw4LjYxLDguNjEsMCwwLDEsNS4xLDEuMzYsOC40NSw4LjQ1LDAsMCwxLDIuOTIsMy44MywyMy43MSwyMy43MSwwLDAsMSw0LjMxLTMuNzIsOC45NCw4Ljk0LDAsMCwxLDUtMS40N3E0LjYsMCw2Ljc5LDNjMS40NiwyLDIuMTgsNC44MywyLjE4LDguNTN2MTguMTdIMzU1Vjk3LjNxMC0zLjYtMS4wOS01LjA3YTMuODgsMy44OCwwLDAsMC0zLjMzLTEuNDdjLTEuODEsMC0zLjgzLDEuMi02LjA4LDMuNlYxMTQuNmgtNi43OVY5Ny4zMXEwLTMuNi0xLjA5LTUuMDdhNCw0LDAsMCwwLTMuMzktMS40N2MtMS44MSwwLTMuODMsMS4yLTYuMDgsMy42djIwLjI0aC02Ljc5di0yOVoiLz4NCiAgICA8L2c+DQo8L3N2Zz4=',

  colorPrimary: '#004FD6',
  colorSecondary: '#004FD6',

  // UI
  appBg: '#f3fcff',
  appContentBg: '#ffffff',
  appBorderColor: '#004FD6',
  appBorderRadius: 0,

  // Typography
  fontBase: '"Source Sans Pro", "Trebuchet MS", "Arial", "Segoe UI", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#202124',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#202124',
  barSelectedColor: '#004FD6',
  barBg: '#f3fcff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#cccccc',
  inputTextColor: '#333333',
  inputBorderRadius: 4
});
