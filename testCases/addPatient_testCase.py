from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select

def login(driver, email, password):
    driver.get('http://localhost:3000/login')  # Assuming the login page URL
    
    WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.ID, 'email'))).send_keys(email)
    WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.ID, 'password'))).send_keys(password)
    
    WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.XPATH, "//button[contains(text(), 'Login')]"))).click()

# Define your email and password
email = 'rajputuzair58@gmail.com'
password = 'Pakian'

driver = webdriver.Chrome()

try:
    driver.get('http://localhost:3000/')  # Assuming this URL redirects to the login page
    
    # Check if the current URL is the login page
    if 'login' in driver.current_url.lower():
        login(driver, email, password)
    
    add_patient_button = WebDriverWait(driver, 20).until(
        EC.element_to_be_clickable((By.XPATH, "//button[contains(text(), 'Add Patient')]"))
    )
    add_patient_button.click()
    
    name_input = driver.find_element(By.ID, 'name')
    name_input.send_keys('John Doe')
    
    phone_input = driver.find_element(By.ID, 'phoneNumber')
    phone_input.click()
    phone_input.clear()
    phone_input.send_keys('0310-0637466')
    
    cnic_input = driver.find_element(By.ID, 'cnic')
    cnic_input.click()
    cnic_input.clear()
    cnic_input.send_keys('31202-6840401-5')
    
    fee_input = driver.find_element(By.ID, 'fee')
    fee_input.click()
    fee_input.clear()
    fee_input.send_keys('5000.00')
    
    disorder_select = Select(driver.find_element(By.ID, 'disorder'))
    disorder_select.select_by_visible_text('General Checkup')
    
    attendant_select = Select(driver.find_element(By.ID, 'attendant'))
    attendant_select.select_by_visible_text('Brother')

    address_textarea = driver.find_element(By.ID, 'address')
    address_textarea.send_keys('123 Main Street')
        
    submit_btn = driver.find_element(By.ID, 'submit')
    submit_btn.click()
    
    # Wait for loading state after submitting if applicable
    WebDriverWait(driver, 60).until(EC.invisibility_of_element_located((By.XPATH, "//div[contains(text(), 'loading')]")))
    
finally:
    driver.quit()
