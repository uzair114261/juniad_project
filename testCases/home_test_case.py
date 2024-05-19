from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
try:
    driver.get('http://localhost:3000/')
    WebDriverWait(driver, 30).until(EC.title_contains('Hospital Patient Data'))
    assert 'Hospital Patient Data' in driver.title
    input("Press enter to close the browser...")
finally:
    driver.quit()