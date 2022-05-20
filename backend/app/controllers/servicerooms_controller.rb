class ServiceroomsController < ApplicationController
  before_action :set_serviceroom, only: %i[ show update destroy ]

  def index
    @servicerooms = Serviceroom.all
    render json: @servicerooms
  end

  def show
    render json: @serviceroom
  end

  def create
    @serviceroom = Serviceroom.new(serviceroom_params)

    if @serviceroom.save
      render json: @serviceroom
    else
      render json: @serviceroom.errors, status: :unprocessable_entity
    end
  end

  def update
    if @serviceroom.update(serviceroom_params)
      render json: @serviceroom
    else
      render json: @serviceroom.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @serviceroom.destroy
  end

  private
    def set_serviceroom
      @serviceroom = Serviceroom.find(params[:id])
    end

    def serviceroom_params
      params.require(:serviceroom).permit(:name)
    end
end
