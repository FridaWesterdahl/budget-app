using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Edge;

namespace bidget_test
{
    [TestClass]
    public class EdgeDriverTest
    {
        private const string edgeDriverDirectory = ".";
        private const string Url = "http://localhost:3000/";
        private EdgeDriver browser;

        [TestInitialize]
        public void EdgeDriverInitialize()
        {
            browser = new EdgeDriver(edgeDriverDirectory);
            browser.Url = Url;
        }

        [TestMethod]
        public void AddExpense()
        {
            browser.Url = Url;

            var button = browser.FindElementByCssSelector("#details-button");
            button.Click();
            var date = browser.FindElementByCssSelector("#date");
            date.SendKeys("2021");
            date.SendKeys(Keys.Right);
            date.SendKeys("10");
            date.SendKeys(Keys.Right);
            date.SendKeys("13");
            var item = browser.FindElementByCssSelector("#input");
            item.SendKeys("Braddie was here");
            var category = browser.FindElementByCssSelector("#category-options");
            category.SendKeys("Shopping");
            var cost = browser.FindElementByCssSelector("#cost");
            cost.SendKeys("200");
            var submit = browser.FindElementByCssSelector(".submit");
            submit.Click();
        }

        [TestMethod]
        public void ChangeBudget()
        {
            browser.Url = Url;
            var budget = browser.FindElementByCssSelector("#budget");
            budget.Clear();
            budget.SendKeys("600000");
        }

        [TestMethod]
        public void RemoveExpense()
        {
            browser.Url = Url;
            var button = browser.FindElementByCssSelector("#details-button");
            button.Click();

            var removeBtn = browser.FindElementByCssSelector(".remove-purchase");
            removeBtn.Click();

        }

        [TestCleanup]
        public void EdgeDriverCleanup()
        {
            //browser.Quit();
        }
    }
}
