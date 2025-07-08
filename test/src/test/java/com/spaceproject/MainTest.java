package com.spaceproject;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import java.time.Duration;
import java.util.List;

public class MainTest {
    private WebDriver webdriver;
    private WebDriverWait wait;

    @BeforeClass
    public void setup(){
        webdriver = new ChromeDriver();
        wait = new WebDriverWait(webdriver,Duration.ofSeconds(10));
        webdriver.get("http://localhost:5173");
    }

    @Test(priority = 0)
    public void HomePageTest(){
        System.out.println("Page Title: "+webdriver.getTitle());
    }

    @Test(priority = 1)
    void HomePage(){
        List<WebElement> title = webdriver.findElements(By.xpath("//span[text()=\" Navigation\"]"));
        Assert.assertFalse(title.isEmpty(),"The Navigation Text Component is Missing");
    }

    @Test(priority = 2)
    void AboutUS(){
        WebElement text = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//h3[text()=\"Meet our team\"]")));
        if(text.toString() == "Meet our team"){
            Assert.fail("The Text is not matched");
        }
    }

    @Test
    void ActivitiesPage(){
        WebElement text = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//div[text() = \"Solar Eclipse\"]")));
        if(text.toString() ==  "Solar Eclipse"){
            Assert.fail("The Text is not matched");
        }

    }


    @AfterClass
    public void teardown(){
        webdriver.close();
        webdriver.quit();
    }
}
