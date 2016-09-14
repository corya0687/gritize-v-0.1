class RoutinesController < ApplicationController
  before_action :set_routine, only: [:show]

  def index
    @routines = Routine.all
    respond_to do |format|
      format.json {render json: @routines}
    end
  end

  def show
    respond_to do |format|
      format.json {render json: @routine}
    end
  end

  private

  def set_routine
    @routine = Routine.find(params[:id])
  end

  def routine_params
    params.require(:routine).permit(:name, :description, :end_date, :tags => [])
  end
end
