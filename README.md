# End to End testing for Miraiz Frontend

## Install
Package
```shell
yarn
```
Extension: [Cucumber (Gherkin) Full Support](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete)

## Get Started
1. Create `.env` file following `.env-example`
2. Create `playwright/.auth/user.json`
> Note: Let the content of `user.json` is `{}`

3. Run test
```shell
yarn test 
```
Option:
`-t`: run specific feature with feature's tag
```shell
yarn test -t @login-failure
```

4. Show report
```shell
yarn report 
```

## Learn More
- Cucumber: https://cucumber.io/
- cucumber-js: https://github.com/cucumber/cucumber-js/tree/main
- Playwright: https://playwright.dev/