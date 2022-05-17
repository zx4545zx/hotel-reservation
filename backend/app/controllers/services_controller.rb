class ServicesController < ApplicationController
  before_action :set_service, only: %i[ show update destroy ]

  def index
    @services = Service.all
    render json: @services
  end

  def show
  end

  def create
    @service = Service.new(service_params)

    if @service.save
      render json: @services
    else
      render json: @service.errors, status: :unprocessable_entity
    end
  end

  def update
    if @service.update(service_params)
      render json: @services
    else
      render json: @service.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @service.destroy
  end

  private
    def set_service
      @service = Service.find(params[:id])
    end

    def service_params
      params.require(:service).permit(:name, :price)
    end
end
