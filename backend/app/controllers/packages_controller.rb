class PackagesController < ApplicationController
  before_action :set_package, only: %i[ show update destroy ]

  def index
    @packages = Package.all
    render json: @packages, include: [ :roomtypes, :meeting_rooms, :equipments, :services ]
  end

  def show
    render json: @package, include: [ :roomtypes, :meeting_rooms, :equipments, :services ]
  end

  def create
    @package = Package.new(package_params)

    if @package.save
      render json: @package, status: :created, location: @package
    else
      render json: @package.errors, status: :unprocessable_entity
    end
  end

  def update
    if @package.update(package_params)
      render json: @package
    else
      render json: @package.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @package.destroy
  end

  private
    def set_package
      @package = Package.find(params[:id])
    end

    def package_params
      params.require(:package).permit(:name, :days, :start, :stop)
    end
end
