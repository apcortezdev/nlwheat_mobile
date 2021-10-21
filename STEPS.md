PREPARE PROJECT:

01. run expo init nlwheatapp
02. chose blank (TypeScript)
03. in root create folder src/screens/home
04. in src/screens/home create files index.tsx and styles.ts
05. download and set files in root folder assets, src/assets and src/theme 

FONTS:

06. install fonts running: expo install expo-font @expo-google-fonts/roboto
07. run: expo install expo-app-loading.
08. import fonts in App.tsx

STATUSBAR:

09. in App.tsx import StatusBar from expo-status-bar
10. add the component to your return as
        <StatusBar style="light" translucent backgroundColor="transparent" />

COMPONENTS:

11. create file src/components/Header/index.tsx

SVG

12. to import and use svg images as components, run expo install react-native-svg
13. run npm i react-native-svg-transformer -d
14. create file in root metro.config.js, and copy paste code from lib homepage https://github.com/kristerkari/react-native-svg-transformer#readme
15. create files src/@types/svg.d.ts and src/@types/png.d.ts
16. restart expo cleaning cache: expo start -c
17. You may now import svg as 
        import Svg from '../folder/svg.svg';

DEAL W/ SHITTY PHONES:

18. run npm install react-native-iphone-x-helper
19. add paddingTop: getStatusBarHeight() + 17 to Home styles.ts

MORE COMPONENTS:

20. create component UserPhoto in src/components/UserPhoto
21. run: expo install expo-linear-gradient
22. create component Message and MessageList

ANIMATIONS:

23. run: expo install react-native-reanimated
24. run: npm install moti
25. add plugins: ['react-native-reanimated/plugin'] to file babel.config.js
26. restart expo cleaning cache: expo start -c
27. import moti into the component Message

MORE COMPONENTS:

28. create component Button and SigninBox
29. create component SendMessageForm

CONTEXT

30. create folder src/hooks
31. create file src/hooks/auth.tsx
32. write the context and import it into App.tsx

LOGIN W/ GITHUB

33. run: expo install expo-auth-session expo-random
34. register the app on github page:
    create a profile in expo page
    go to https://expo.dev/settings/members and copy yourExpoName
    go to app.json and create line:
        "scheme": "yourAppName";
    yourAppName must be same from prop "name" and "slug"
    copy yourAppName from app.json
    go to https://github.com/settings/developers
    create New OAuth App
    set Application URL and Authorization callback URL to https://auth.expo.io/@yourExpoName/yourAppName
    run: expo login

35. run: npm i axios
36. run: expo install @react-native-async-storage/async-storage
37. add storage in hook/auth.tsx

38. run: npm i socket.io-client
39. use it in the cmp MessageList

