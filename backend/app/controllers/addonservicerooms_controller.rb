class AddonserviceroomsController < ApplicationController
  before_action :set_addonserviceroom, only: %i[ show update destroy ]

  def index
    @addonservicerooms = Addonserviceroom.all
    render json: @addonservicerooms
  end

  def show
    render json: @addonserviceroom
  end

  def create
    @addonserviceroom = Addonserviceroom.new(addonserviceroom_params)

    if @addonserviceroom.save
      render json: @addonserviceroom
    else
      render json: @addonserviceroom.errors, status: :unprocessable_entity
    end
  end

  def update
    if @addonserviceroom.update(addonserviceroom_params)
      render json: @addonserviceroom
    else
      render json: @addonserviceroom.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @addonserviceroom.destroy
  end

  private
    def set_addonserviceroom
      @addonserviceroom = Addonserviceroom.find(params[:id])
    end

    def addonserviceroom_params
      params.require(:addonserviceroom).permit(:name, :price)
    end
end
