class RoutinesController < ApplicationController
  before_action :set_routine, only: [:show, :update, :destroy]

  def index
    respond_to do |format|
      format.json {render json: current_user.routines}
    end
  end

  def show
    respond_to do |format|
      format.json {render json: @routine}
    end
  end

  def create
    binding.pry
    @routine = current_user.routines.build(routine_params)
    @routine.save
  end

  def update
    @routine.update(routine_params)
    @routine.save
  end

  def destroy
    @routine.delete
    @routine.save
  end

  private

  def set_routine
    @routine = Routine.find(params[:id])
  end

  def routine_params
    params.require(:routine).permit(:name, :user_id, :description, :start_date, :end_date, :tags => [] )
  end
end
