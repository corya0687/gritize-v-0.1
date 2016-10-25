class SubroutinesController < ApplicationController
  before_action :set_subroutine, only: [:show, :update, :destroy]

  def index

  end

  def create
    @routine = Routine.find(params[:routine_id])
    @routine.subroutines.build(subroutine_params)
    @routine.save
  end

  def update
    @sub_routine.update(subroutine_params)
    @sub_routine.save
  end

  def destroy
    @sub_routine.delete
  end

  private

    def set_subroutine
      @sub_routine = Subroutine.find(params[:id])
    end

    def subroutine_params
      params.require(:subroutine).permit(:name, :description, :end_date, :completed)
    end
end
