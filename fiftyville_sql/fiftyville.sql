FIRST I NEED TO CHECK description crime scene

SELECT description FROM crime_scene_reports WHERE month = 7 AND day = 28 AND street = 'Humphrey Street';

NOW i should check the interviews from

SELECT transcript FROM interviews
WHERE year = 2021
AND month = 7
AND day = 28;

AND now i should check
bakery security logs, phone calls, atm transactions and flight from the next day:

SELECT passengers.flight_id,people.passport_number, people.phone_number,phone_calls.receiver, bank_accounts.account_number
FROM passengers
JOIN people on people.passport_number = passengers.passport_number
JOIN bank_accounts on bank_accounts.person_id = people.id
JOIN atm_transactions on atm_transactions.account_number = bank_accounts.account_number
JOIN phone_calls on phone_calls.caller = people.phone_number
JOIN bakery_security_logs on bakery_security_logs.license_plate = people.license_plate
JOIN flights on passengers.flight_id = flights.id
WHERE bakery_security_logs.year = 2021
AND bakery_security_logs.day = 28
AND bakery_security_logs.hour = 10
AND bakery_security_logs.month = 7
AND bakery_security_logs.minute >= 15
AND bakery_security_logs.minute <= 25
AND phone_calls.year = 2021
AND phone_calls.month = 7
AND phone_calls.day = 28
AND phone_calls.duration < 60
AND atm_transactions.year = 2021
AND atm_transactions.day = 28
AND atm_transactions.month = 7
AND atm_transactions.transaction_type = "withdraw"
AND atm_transactions.atm_location = "Leggett Street"
AND flights.day = 29
AND flights.year = 2021
AND flights.month = 7;

HERE i received 2 people and two flights
Check which flight is first by order

SELECT passengers.flight_id,people.passport_number, people.phone_number,phone_calls.receiver, bank_accounts.account_number
FROM passengers
JOIN people on people.passport_number = passengers.passport_number
JOIN bank_accounts on bank_accounts.person_id = people.id
JOIN atm_transactions on atm_transactions.account_number = bank_accounts.account_number
JOIN phone_calls on phone_calls.caller = people.phone_number
JOIN bakery_security_logs on bakery_security_logs.license_plate = people.license_plate
JOIN flights on passengers.flight_id = flights.id
WHERE bakery_security_logs.year = 2021
AND bakery_security_logs.day = 28
AND bakery_security_logs.hour = 10
AND bakery_security_logs.month = 7
AND bakery_security_logs.minute >= 15
AND bakery_security_logs.minute <= 25
AND phone_calls.year = 2021
AND phone_calls.month = 7
AND phone_calls.day = 28
AND phone_calls.duration < 60
AND atm_transactions.year = 2021
AND atm_transactions.day = 28
AND atm_transactions.month = 7
AND atm_transactions.transaction_type = "withdraw"
AND atm_transactions.atm_location = "Leggett Street"
AND flights.day = 29
AND flights.year = 2021
AND flights.month = 7
ORDER BY flights.hour, flights.minute;
