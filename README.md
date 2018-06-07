# SurveyCreator
Google Script to create several surveys (Forms) at once from data in a Google Sheets.
It also fills the sheet with the surveys links. 

The Google Sheet must have the following columns, in this order:

| Order	 | Speaker	| Title |	Date	| URL |
|--------|----------|-------|-------|-----|
|        |          |       |       |     |

Actual data begins on the second row. 

The fields are as follow:
- Order: Talk/Presentation order
- Speaker: Speaker name
- Title: Presentation Title
- Date: Not used yet
- URL: leave empty, the script will populate this field

