


Scenario 1:


CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
  FOR acc IN (
    SELECT AccountID, Balance
    FROM Accounts
    WHERE AccountType = 'Savings'
  )
  LOOP
    UPDATE Accounts
    SET Balance = acc.Balance + (acc.Balance * 0.01),
        LastModified = SYSDATE
    WHERE AccountID = acc.AccountID;

    DBMS_OUTPUT.PUT_LINE(' Interest added to Account ID: ' || acc.AccountID);
  END LOOP;
  COMMIT;
END;
/

Scenario 2:

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
  p_department IN VARCHAR2,
  p_bonus_percent IN NUMBER
) AS
BEGIN
  FOR emp IN (
    SELECT EmployeeID, Salary FROM Employees
    WHERE Department = p_department
  )
  LOOP
    UPDATE Employees
    SET Salary = emp.Salary + (emp.Salary * (p_bonus_percent / 100))
    WHERE EmployeeID = emp.EmployeeID;

    DBMS_OUTPUT.PUT_LINE('Bonus applied to Employee ID: ' || emp.EmployeeID);
  END LOOP;

  COMMIT;
END;
/

BEGIN
  UpdateEmployeeBonus('IT', 10);  -- 10% bonus to IT department
END;


Scenario 3:

CREATE OR REPLACE PROCEDURE TransferFunds(
  p_from_account IN NUMBER,
  p_to_account IN NUMBER,
  p_amount IN NUMBER
) AS
  v_from_balance NUMBER;
BEGIN
  -- Get the source account balance
  SELECT Balance INTO v_from_balance
  FROM Accounts
  WHERE AccountID = p_from_account;

  -- Check for sufficient funds
  IF v_from_balance >= p_amount THEN
    -- Deduct from source
    UPDATE Accounts
    SET Balance = Balance - p_amount,
        LastModified = SYSDATE
    WHERE AccountID = p_from_account;

    -- Add to destination
    UPDATE Accounts
    SET Balance = Balance + p_amount,
        LastModified = SYSDATE
    WHERE AccountID = p_to_account;

    DBMS_OUTPUT.PUT_LINE('Transfer of ' || p_amount || ' from Account ' || p_from_account ||
                         ' to Account ' || p_to_account || ' completed.');
  ELSE
    DBMS_OUTPUT.PUT_LINE('❌ Insufficient balance in source account: ' || p_from_account);
  END IF;

  COMMIT;
EXCEPTION
  WHEN NO_DATA_FOUND THEN
    DBMS_OUTPUT.PUT_LINE('❌ One of the accounts does not exist.');
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('❌ Unexpected error: ' || SQLERRM);
    ROLLBACK;
END;
/

BEGIN
  TransferFunds(1, 2, 500);
END;
/



