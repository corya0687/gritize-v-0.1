Devise User
has_many Routines

Routine
  Name description deadline frequency(hourly weekly daily etc) belongs to User has_many subroutines avg_grade completed(boolean) ontime(boolean)

Subroutine
belongs_to Routine name activity  Routine deadline complete(boolean) ontime(boolean)

Goal
Has many_routines
