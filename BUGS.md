# BUG: Title Field Validation Inconsistency

**Reported by**: Vitaliia Palamarchuk
**Date**: 09/03/2025

## Summary
When creating a new task (via the "New task" side drawer in the "Topics" module), the UI displays a validation message stating:  
> "Title must have minimum 2 and maximum 50 characters."

However, the actual requirement (and acceptance criteria from the specification) says at least 3 characters must be entered. If the user enters only 2 characters (e.g. "AB"), the task form does NOT allow submission. This creates confusion for the user.

## Steps to Reproduce
1. Log in as any valid user (e.g., `maintenance@verso.de`).
2. Navigate to "Topics" → "Test Topic."
3. Open the side drawer for tasks.
4. Click the "+" icon to create a new task.
5. In the Title field, enter exactly 2 characters (e.g., "AB").
6. Observe the validation message and the inability to save.

## Expected Behavior
- The validation message in the UI should match the real requirement (i.e., “minimum 3 characters”).
- Alternatively, if the true requirement is “min 2,” then the code that prevents submission should be updated accordingly.

## Actual Behavior
- The UI says "Title must have minimum 2 and maximum 50 characters," but the form requires at least 3 characters to proceed.

## Severity
- **Medium**: It blocks the user from proceeding if they follow the (misleading) 2‐character minimum, and might cause confusion.

## Additional Information
- A screenshot of the validation message has been attached below.
- The bug reproduces in Chrome and Firefox under Windows & Mac.
- Not yet tested in mobile browsers.

![alt text](<Screenshot 2025-03-09 at 11.42.22 AM.png>)