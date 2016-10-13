class SubroutinesController < ApplicationController
  def index

  end

  def create
    binding.pry
    @routine = Routine.find(params[:routine_id])
    @routine.subroutines.build(subroutine_params)
    @routine.save
  end

  def update

  end

  def show

  end

  private

    def set_routine
      @sub_routine = Subroutine.find(params[:id])
    end

    def subroutine_params
      params.require(:subroutine).permit(:name, :description, :end_date)
    end
end
