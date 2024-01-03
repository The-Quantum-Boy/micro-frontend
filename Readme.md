ng new mono-workspace --create-application=false
ng g application host-app --routing --style=scss
ng g application mfe-app --routing --style=scss
ng add  @angular-architects/module-federation --project mfe-app --port 4300
