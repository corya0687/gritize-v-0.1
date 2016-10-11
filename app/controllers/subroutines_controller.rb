class SubroutinesController < ApplicationController
  def index

  end

  def create
    @sub_routine = Subroutine.new(subroutine_params)
    @sub_routine.save
  end

  def update

  end

  private

    def set_routine
      @sub_routine = Subroutine.find(params[:id])
    end

    def subroutine_parmas
      params.require(:subroutine).permit(:name, :description, :end_date)
    end
end
