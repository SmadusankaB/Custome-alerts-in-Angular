# Custom Alerts in Angular

The project has been upgraded to Angular 14. This an example Angular project to implement custom alerts

## Prerequisite

* Node v18.12.1
* NPM 8.19.2

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Use customized alerts

There are 4 parameters to be set based on alert-types.
Check test.component.ts to see how to use.

1. title: string (Title of the alert modal).
2. type: string (Type of the alert modal. Supported values. success, danger, info)
3. time: number (Timeout of the alert modal).
4. body: string (Body string of the alert modal. Ex: Error message)

[![Custom Alerts tutorial](https://github.com/SmadusankaB/Custome-alerts-in-Angular/blob/master/success_alert.jpeg)](https://youtu.be/D_aqdcWeHe8 "Customizable alerts component in angular | Angular tutorial")

### Examples

#### Success Alert

![success](./success_alert.jpeg)

#### Error Alert

![success](./error_alert.jpeg)

#### Warning Alert

![success](./warning_alert.jpeg)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
