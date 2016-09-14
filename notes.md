Devise User
has_many Routines

Routine
  Name description end_date belongs to User has_many subroutines

  ****V1****
  Functions that will use subroutine completion status to determine:       completed(boolean) ontime(boolean), avg_grade
  ****V2****
  -- Frequency will be a future feature that is setup using a calendar.

Subroutine
belongs_to Routine name activity  Routine deadline complete(boolean) ontime(boolean)

Goal
Has many_routines
