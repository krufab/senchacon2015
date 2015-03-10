# SenchaCon Demo

## Responsive Design
Screens equal or smaller than 1024 width will get a "tablet"-like view.
Screens larger than 1024 will get a "desktop" view.
Note the `MyApp.view.utils.SmallScreen` mixin, with responsive configuration,
formula's and magic methods.

## Device Profiles
Run this application in an emulator, or with `?deviceType=Phone` in the
URL to see the "phone" view.
Note the `MyApp.profile.Phone`, `MyApp.view.phone.Main` and `Application.js`.